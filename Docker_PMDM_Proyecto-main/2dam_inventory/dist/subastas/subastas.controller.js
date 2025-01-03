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
exports.PujaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const subastas_dto_1 = require("./subastas.dto");
const subastas_service_1 = require("./subastas.service");
let PujaController = class PujaController {
    constructor(pujaService) {
        this.pujaService = pujaService;
    }
    async createPuja(createPujaDto, files) {
        console.log(files);
        console.log(createPujaDto);
        const imagenesUrls = files.map(file => `/images/${file.filename}`);
        return this.pujaService.createPuja({ ...createPujaDto, imagenes: imagenesUrls });
    }
    findAllPujas() {
        return this.pujaService.findAll();
    }
    async updatePuja(id, updatePujaDto) {
        return this.pujaService.updatePuja(id, {
            ...updatePujaDto,
        });
    }
    findOnePuja(id) {
        return this.pujaService.findOne(id);
    }
    findOtherPuja(id) {
        return this.pujaService.getPujaByOtherUser(id);
    }
    findMyPuja(id) {
        return this.pujaService.getPujasByUser(id);
    }
    makeBid(makeBidDto) {
        return this.pujaService.makeBid(makeBidDto);
    }
    getBid(id) {
        return this.pujaService.getBidsByPuja(id);
    }
    getusersBid(email) {
        return this.pujaService.getBidsByUser(email);
    }
    deletePuja(id) {
        return this.pujaService.deletePuja(id);
    }
    pagar(id) {
        return this.pujaService.pay(id);
    }
};
exports.PujaController = PujaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5, {
        storage: (0, multer_1.diskStorage)({
            destination: './images',
            filename: (req, file, callback) => {
                const filename = `${req.body.creatorId}-${file.originalname}`;
                callback(null, filename);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subastas_dto_1.CreatePujaDto, Array]),
    __metadata("design:returntype", Promise)
], PujaController.prototype, "createPuja", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "findAllPujas", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, subastas_dto_1.UpdatePujaDto]),
    __metadata("design:returntype", Promise)
], PujaController.prototype, "updatePuja", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "findOnePuja", null);
__decorate([
    (0, common_1.Get)('other/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "findOtherPuja", null);
__decorate([
    (0, common_1.Get)('my/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "findMyPuja", null);
__decorate([
    (0, common_1.Post)('bid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subastas_dto_1.MakeBidDto]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "makeBid", null);
__decorate([
    (0, common_1.Get)('bid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "getBid", null);
__decorate([
    (0, common_1.Get)('users/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "getusersBid", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "deletePuja", null);
__decorate([
    (0, common_1.Get)('pay/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PujaController.prototype, "pagar", null);
exports.PujaController = PujaController = __decorate([
    (0, common_1.Controller)('pujas'),
    __metadata("design:paramtypes", [subastas_service_1.PujaService])
], PujaController);
//# sourceMappingURL=subastas.controller.js.map