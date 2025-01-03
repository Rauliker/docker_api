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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localidad = void 0;
const provinvia_entity_1 = require("../provincia/provinvia.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
let Localidad = class Localidad {
};
exports.Localidad = Localidad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Localidad.prototype, "id_localidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Localidad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provinvia_entity_1.Provincia, (provincia) => provincia.localidades),
    (0, typeorm_1.JoinColumn)({ name: 'id_provincia' }),
    __metadata("design:type", provinvia_entity_1.Provincia)
], Localidad.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_entity_1.User, (user) => user.localidad),
    __metadata("design:type", Array)
], Localidad.prototype, "users", void 0);
exports.Localidad = Localidad = __decorate([
    (0, typeorm_1.Entity)('localidades')
], Localidad);
//# sourceMappingURL=localidad.entity.js.map