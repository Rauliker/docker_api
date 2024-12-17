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
exports.LocalidadController = void 0;
const common_1 = require("@nestjs/common");
const localidad_service_1 = require("./localidad.service");
let LocalidadController = class LocalidadController {
    constructor(localidadService) {
        this.localidadService = localidadService;
    }
    createLocalidad(createLocalidadDto) {
        return this.localidadService.createMultipleLocalidades(createLocalidadDto);
    }
    findAllLocalidades() {
        return this.localidadService.findAll();
    }
    findOneLocalidad(id) {
        return this.localidadService.findOne(id);
    }
};
exports.LocalidadController = LocalidadController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], LocalidadController.prototype, "createLocalidad", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocalidadController.prototype, "findAllLocalidades", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocalidadController.prototype, "findOneLocalidad", null);
exports.LocalidadController = LocalidadController = __decorate([
    (0, common_1.Controller)('localidades'),
    __metadata("design:paramtypes", [localidad_service_1.LocalidadService])
], LocalidadController);
//# sourceMappingURL=localidad.controller.js.map