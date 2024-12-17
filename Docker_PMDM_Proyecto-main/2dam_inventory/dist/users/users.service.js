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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const firebase_service_1 = require("../firebase/firebase_service");
const localidad_entity_1 = require("../localidad/localidad.entity");
const provinvia_entity_1 = require("../provincia/provinvia.entity");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UserService = class UserService {
    constructor(userRepository, localidadRepository, provinciaRepository, firebaseService) {
        this.userRepository = userRepository;
        this.localidadRepository = localidadRepository;
        this.provinciaRepository = provinciaRepository;
        this.firebaseService = firebaseService;
    }
    async createUser(createUserDto) {
        const provincia = await this.provinciaRepository.findOne({
            where: { id_provincia: createUserDto.provinciaId },
        });
        if (!provincia) {
            throw new Error('Provincia no encontrada');
        }
        const localidad = await this.localidadRepository.findOne({
            where: { id_localidad: createUserDto.localidadId },
        });
        if (!localidad) {
            throw new Error('Localidad no encontrada');
        }
        const userExists = await this.userRepository.findOne({ where: { email: createUserDto.email } });
        if (userExists) {
            throw new common_1.BadRequestException('El usuario ya existe.');
        }
        const usernameExists = await this.userRepository.findOne({ where: { email: createUserDto.username } });
        if (userExists) {
            throw new common_1.BadRequestException('El nombre de usuario ya existe.');
        }
        const firebaseUser = await this.firebaseService.createFirebaseUser(createUserDto.email, createUserDto.banned, createUserDto.password);
        if (!firebaseUser) {
            throw new common_1.BadRequestException('Error al crear el usuario en Firebase');
        }
        const user = this.userRepository.create({
            email: createUserDto.email,
            username: createUserDto.username,
            password: createUserDto.password,
            role: createUserDto.role,
            banned: createUserDto.banned,
            balance: createUserDto.balance,
            calle: createUserDto.calle,
            provincia,
            localidad
        });
        return this.userRepository.save(user);
    }
    async updateUser(email, updateUserDto) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado.');
        }
        Object.assign(user, updateUserDto);
        return this.userRepository.save(user);
    }
    async findAll() {
        return this.userRepository.find({ relations: ['provincia', 'localidad', 'createdPujas', 'pujaBids'] });
    }
    async findOne(email) {
        const user = await this.userRepository.findOne({ where: { email }, relations: ['provincia', 'localidad', 'createdPujas', 'pujaBids'] });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado.');
        }
        return user;
    }
    async login(email, password) {
        const user = await this.userRepository.findOne({ where: { email, password, banned: false }, relations: ['provincia', 'localidad', 'createdPujas', 'pujaBids'] });
        if (!user) {
            throw new common_1.NotFoundException('Credenciales incorrectas.');
        }
        return user;
    }
    async deleteUser(email) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado.');
        }
        try {
            await this.firebaseService.deleteFirebaseUser(email);
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al eliminar el usuario de Firebase: ' + error.message);
        }
        await this.userRepository.remove(user);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(localidad_entity_1.Localidad)),
    __param(2, (0, typeorm_1.InjectRepository)(provinvia_entity_1.Provincia)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        firebase_service_1.FirebaseService])
], UserService);
//# sourceMappingURL=users.service.js.map