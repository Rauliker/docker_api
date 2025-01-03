"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalidadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const privincia_module_1 = require("../provincia/privincia.module");
const localidad_controller_1 = require("./localidad.controller");
const localidad_entity_1 = require("./localidad.entity");
const localidad_service_1 = require("./localidad.service");
let LocalidadModule = class LocalidadModule {
};
exports.LocalidadModule = LocalidadModule;
exports.LocalidadModule = LocalidadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([localidad_entity_1.Localidad]), privincia_module_1.ProvinciaModule],
        exports: [typeorm_1.TypeOrmModule.forFeature([localidad_entity_1.Localidad])],
        controllers: [localidad_controller_1.LocalidadController],
        providers: [localidad_service_1.LocalidadService],
    })
], LocalidadModule);
//# sourceMappingURL=localidad.module.js.map