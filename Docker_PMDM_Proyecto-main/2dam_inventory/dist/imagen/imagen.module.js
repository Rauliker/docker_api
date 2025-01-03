"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subastas_entity_1 = require("../subastas/subastas.entity");
const imagen_entity_1 = require("./imagen.entity");
let ImagenModule = class ImagenModule {
};
exports.ImagenModule = ImagenModule;
exports.ImagenModule = ImagenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([imagen_entity_1.Image, subastas_entity_1.Puja])],
        controllers: [],
        providers: [],
        exports: [typeorm_1.TypeOrmModule],
    })
], ImagenModule);
//# sourceMappingURL=imagen.module.js.map