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
exports.Puja = void 0;
const imagen_entity_1 = require("../imagen/imagen.entity");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
const pujaBid_entity_1 = require("./pujaBid.entity");
let Puja = class Puja {
};
exports.Puja = Puja;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Puja.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.createdPujas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'email' }),
    __metadata("design:type", users_entity_1.User)
], Puja.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => imagen_entity_1.Image, (imagen) => imagen.puja),
    __metadata("design:type", Array)
], Puja.prototype, "imagenes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pujaBid_entity_1.PujaBid, (pujaBid) => pujaBid.puja),
    __metadata("design:type", Array)
], Puja.prototype, "pujas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Puja.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Puja.prototype, "open", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Puja.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal'),
    __metadata("design:type", Number)
], Puja.prototype, "pujaInicial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Puja.prototype, "fechaFin", void 0);
exports.Puja = Puja = __decorate([
    (0, typeorm_1.Entity)()
], Puja);
//# sourceMappingURL=puja.entity.js.map