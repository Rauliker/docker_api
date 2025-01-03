"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PujaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const imagen_entity_1 = require("../imagen/imagen.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_2 = require("typeorm");
const pujaBid_entity_1 = require("./pujaBid.entity");
const subastas_entity_1 = require("./subastas.entity");
let PujaService = class PujaService {
    constructor(pujaRepository, userRepository, pujaBidRepository, imagenRepository) {
        this.pujaRepository = pujaRepository;
        this.userRepository = userRepository;
        this.pujaBidRepository = pujaBidRepository;
        this.imagenRepository = imagenRepository;
    }
    async createPuja(createPujaDto) {
        const { creatorId, imagenes: imagenesUrls, ...pujaData } = createPujaDto;
        const creator = await this.userRepository.findOne({ where: { email: creatorId } });
        if (!creator) {
            throw new common_1.NotFoundException('Creador no encontrado.');
        }
        const puja = this.pujaRepository.create({
            ...pujaData,
            creator,
        });
        const savedPuja = await this.pujaRepository.save(puja);
        const imagenes = imagenesUrls.map((url) => {
            const imagen = new imagen_entity_1.Image();
            imagen.url = url;
            imagen.puja = savedPuja;
            return imagen;
        });
        await this.imagenRepository.save(imagenes);
        return savedPuja;
    }
    async getBidsByUser(userEmail) {
        const pujaBids = await this.pujaBidRepository.find({
            where: { user: { email: userEmail } },
            relations: ['puja', 'user'],
        });
        if (pujaBids.length === 0) {
            throw new common_1.NotFoundException('No se encontraron bids para esta puja.');
        }
        return pujaBids;
    }
    async deletePuja(id) {
        const puja = await this.pujaRepository.findOne({ where: { id }, relations: ['pujas'] });
        if (!puja) {
            throw new common_1.NotFoundException('Puja no encontrada');
        }
        await this.pujaRepository.remove(puja);
        return `Puja con ID ${id} y sus bids relacionadas fueron eliminadas`;
    }
    async getPujaByOtherUser(userEmail) {
        const pujas = await this.pujaRepository.find({
            where: { creator: { email: (0, typeorm_2.Not)(userEmail) } },
            relations: ['creator', 'pujas', 'imagenes'],
        });
        if (pujas.length === 0) {
            throw new common_1.NotFoundException('No se encontraron pujas de otros usuarios.');
        }
        else {
            const pujasWithPujaActual = await Promise.all(pujas.map(async (puja) => {
                const pujaActual = await this.getPujaActual(puja.id, puja.pujaInicial);
                return { ...puja, pujaActual };
            }));
            return pujasWithPujaActual;
        }
    }
    async getPujasByUser(userEmail) {
        const pujas = await this.pujaRepository.find({
            where: { creator: { email: (userEmail) } },
            relations: ['creator', 'imagenes'],
        });
        if (pujas.length === 0) {
            throw new common_1.NotFoundException('No se encontraron subastas del usuario de otros usuarios.');
        }
        else {
            const pujasWithPujaActual = await Promise.all(pujas.map(async (puja) => {
                const pujaActual = await this.getPujaActual(puja.id, puja.pujaInicial);
                return { ...puja, pujaActual };
            }));
            return pujasWithPujaActual;
        }
    }
    async getPujaActual(pujaId, pujaInicial) {
        const maxBid = await this.pujaBidRepository
            .createQueryBuilder('puja_bids')
            .innerJoin('users', 'users', 'puja_bids.userEmail = users.email')
            .where('puja_bids.pujaId = :pujaId', { pujaId })
            .andWhere('users.banned = false')
            .select('MAX(puja_bids.amount)', 'max')
            .getRawOne();
        return maxBid?.max ? parseFloat(maxBid.max) : parseFloat(pujaInicial.toString());
    }
    async findAll() {
        const pujas = await this.pujaRepository.find({
            relations: ['creator', 'imagenes', 'pujas'],
        });
        const pujasWithPujaActual = await Promise.all(pujas.map(async (puja) => {
            const pujaActual = await this.getPujaActual(puja.id, puja.pujaInicial);
            return { ...puja, pujaActual };
        }));
        return pujasWithPujaActual;
    }
    async findOne(id) {
        const puja = await this.pujaRepository.findOne({
            where: { id },
            relations: ['creator', 'imagenes', 'pujas'],
        });
        if (!puja) {
            throw new common_1.NotFoundException('Puja no encontrada.');
        }
        const pujaActual = await this.getPujaActual(puja.id, puja.pujaInicial);
        return { ...puja, pujaActual };
    }
    async findOneUsers(id) {
        const puja = await this.pujaRepository.findOne({
            where: { id },
            relations: ['creator', 'imagenes'],
        });
        if (!puja) {
            throw new common_1.NotFoundException('Puja no encontrada.');
        }
        const bids = await this.getBidsByPuja(id);
        const pujaActual = await this.getPujaActual(puja.id, puja.pujaInicial);
        return { ...puja, bids, pujaActual };
    }
    async updatePuja(id, updatePujaDto) {
        const puja = await this.findOne(id);
        if (!puja) {
            throw new Error('Puja no encontrada');
        }
        const updatedPuja = this.pujaRepository.merge(puja, updatePujaDto);
        await this.pujaRepository.save(updatedPuja);
        return updatedPuja;
        return puja;
    }
    async makeBid(makeBidDto) {
        const { userId, pujaId, bidAmount, email_user, iswinner } = makeBidDto;
        const puja = await this.pujaRepository.findOne({
            where: { id: pujaId },
            relations: ['creator'],
        });
        if (!puja) {
            throw new common_1.NotFoundException('Puja no encontrada');
        }
        const user = await this.userRepository.findOne({ where: { email: userId, banned: false } });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado o esta baneado');
        }
        if (puja.creator.email === userId) {
            throw new common_1.NotFoundException('El creador de la puja no puede realizar una puja.');
        }
        const currentDate = new Date();
        if (currentDate > puja.fechaFin) {
            throw new common_1.NotFoundException('La fecha límite para esta puja ha expirado.');
        }
        const pujaActual = await this.getPujaActual(puja.id, puja.pujaInicial);
        if (bidAmount <= pujaActual) {
            throw new common_1.NotFoundException('El monto de la puja debe ser mayor al monto actual.');
        }
        const existingBid = await this.pujaBidRepository
            .createQueryBuilder('puja_bids')
            .innerJoin('users', 'users', 'puja_bids.userEmail = users.email')
            .innerJoin('puja', 'puja', 'puja_bids.pujaId = puja.id')
            .where('users.email = "' + userId + '"')
            .andWhere('puja.id = ' + pujaId + '')
            .select('puja_bids.*')
            .getRawOne();
        if (existingBid) {
            const updatedBid = this.pujaBidRepository.merge({
                id: existingBid.id,
                user,
                puja,
                iswinner,
                amount: bidAmount,
                email_user: email_user
            });
            return await this.pujaBidRepository.save(updatedBid);
        }
        else {
            const newBid = this.pujaBidRepository.create({ user, puja, amount: bidAmount, email_user });
            return await this.pujaBidRepository.save(newBid);
        }
    }
    async getBidsByPuja(pujaId) {
        return this.pujaBidRepository.find({
            where: { puja: { id: pujaId } },
            relations: ['puja', 'user'],
        });
    }
    async pay(pujaId) {
        const puja = await this.pujaRepository.findOne({
            where: { id: pujaId },
            relations: ['creator'],
        });
        if (!puja) {
            throw new common_1.NotFoundException('Puja no encontrada');
        }
        const highestBid = await this.pujaBidRepository
            .createQueryBuilder('bid')
            .where('bid.pujaId = :pujaId', { pujaId })
            .orderBy('bid.amount', 'DESC')
            .getOne();
        if (!highestBid) {
            throw new common_1.NotFoundException('No hay pujas para esta subasta.');
        }
        const creator = puja.creator;
        creator.balance = (creator.balance || 0) + highestBid.amount;
        await this.userRepository.save(creator);
        return `Se ha añadido ${highestBid.amount} al balance del creador ${creator.email}.`;
    }
};
exports.PujaService = PujaService;
exports.PujaService = PujaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subastas_entity_1.Puja)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(pujaBid_entity_1.PujaBid)),
    __param(3, (0, typeorm_1.InjectRepository)(imagen_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PujaService);
//# sourceMappingURL=subastas.service.js.map