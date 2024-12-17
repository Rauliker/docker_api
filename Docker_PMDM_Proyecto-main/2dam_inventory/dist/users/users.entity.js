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
exports.User = void 0;
const localidad_entity_1 = require("../localidad/localidad.entity");
const provinvia_entity_1 = require("../provincia/provinvia.entity");
const puja_entity_1 = require("../sujastas/puja.entity");
const pujaBid_entity_1 = require("../sujastas/pujaBid.entity");
const typeorm_1 = require("typeorm");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 2 }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "banned", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provinvia_entity_1.Provincia, (provincia) => provincia.users),
    (0, typeorm_1.JoinColumn)({ name: 'id_provincia' }),
    __metadata("design:type", provinvia_entity_1.Provincia)
], User.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => localidad_entity_1.Localidad, (localidad) => localidad.users),
    (0, typeorm_1.JoinColumn)({ name: 'id_localidad' }),
    __metadata("design:type", localidad_entity_1.Localidad)
], User.prototype, "localidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "calle", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => puja_entity_1.Puja, (puja) => puja.creator),
    __metadata("design:type", Array)
], User.prototype, "createdPujas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pujaBid_entity_1.PujaBid, (pujaBid) => pujaBid.user),
    __metadata("design:type", Array)
], User.prototype, "pujaBids", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=users.entity.js.map