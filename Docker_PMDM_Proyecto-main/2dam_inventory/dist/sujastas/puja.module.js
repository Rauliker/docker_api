"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PujaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const imagen_entity_1 = require("../imagen/imagen.entity");
const users_entity_1 = require("../users/users.entity");
const puja_controller_1 = require("./puja.controller");
const puja_entity_1 = require("./puja.entity");
const puja_service_1 = require("./puja.service");
const pujaBid_entity_1 = require("./pujaBid.entity");
let PujaModule = class PujaModule {
};
exports.PujaModule = PujaModule;
exports.PujaModule = PujaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([puja_entity_1.Puja, imagen_entity_1.Image, users_entity_1.User, pujaBid_entity_1.PujaBid])],
        controllers: [puja_controller_1.PujaController],
        providers: [puja_service_1.PujaService],
    })
], PujaModule);
//# sourceMappingURL=puja.module.js.map