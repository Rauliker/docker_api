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
exports.LocalidadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const provinvia_entity_1 = require("../provincia/provinvia.entity");
const typeorm_2 = require("typeorm");
const localidad_entity_1 = require("./localidad.entity");
let LocalidadService = class LocalidadService {
    constructor(localidadRepository, provinciaRepository) {
        this.localidadRepository = localidadRepository;
        this.provinciaRepository = provinciaRepository;
    }
    async createMultipleLocalidades(createLocalidadDtos) {
        const localidades = [];
        for (const createLocalidadDto of createLocalidadDtos) {
            const provincia = await this.provinciaRepository.findOne({
                where: { id_provincia: createLocalidadDto.provinciaId },
            });
            if (!provincia) {
                throw new Error(`Provincia con ID ${createLocalidadDto.provinciaId} no encontrada`);
            }
            const localidad = this.localidadRepository.create({
                nombre: createLocalidadDto.nombre,
                provincia,
            });
            localidades.push(localidad);
        }
        return this.localidadRepository.save(localidades);
    }
    async findAll() {
        return this.localidadRepository.find({ relations: ['provincia'] });
    }
    async findOne(id_localidad) {
        return this.localidadRepository.findOne({
            where: { id_localidad },
            relations: ['provincia'],
        });
    }
};
exports.LocalidadService = LocalidadService;
exports.LocalidadService = LocalidadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(localidad_entity_1.Localidad)),
    __param(1, (0, typeorm_1.InjectRepository)(provinvia_entity_1.Provincia)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LocalidadService);
//# sourceMappingURL=localidad.service.js.map