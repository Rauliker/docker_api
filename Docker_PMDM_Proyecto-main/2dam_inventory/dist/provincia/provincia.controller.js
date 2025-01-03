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
exports.ProvinciaController = void 0;
const common_1 = require("@nestjs/common");
const provincia_service_1 = require("./provincia.service");
let ProvinciaController = class ProvinciaController {
    constructor(provinciaService) {
        this.provinciaService = provinciaService;
    }
    createProvincia(createProvinciaDto) {
        return this.provinciaService.createProvincia(createProvinciaDto);
    }
    findAllProvincias() {
        return this.provinciaService.findAll();
    }
    findOneProvincia(id) {
        return this.provinciaService.findOne(id);
    }
};
exports.ProvinciaController = ProvinciaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProvinciaController.prototype, "createProvincia", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProvinciaController.prototype, "findAllProvincias", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProvinciaController.prototype, "findOneProvincia", null);
exports.ProvinciaController = ProvinciaController = __decorate([
    (0, common_1.Controller)('provincias'),
    __metadata("design:paramtypes", [provincia_service_1.ProvinciaService])
], ProvinciaController);
//# sourceMappingURL=provincia.controller.js.map