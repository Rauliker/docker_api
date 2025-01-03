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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs = require("fs");
const multer_1 = require("multer");
const path = require("path");
const user_dto_1 = require("./user.dto");
const users_service_1 = require("./users.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(createUserDto, files) {
        if (!files || files.length === 0) {
            throw new common_1.BadRequestException('At least one file is required');
        }
        const tempFilePaths = files.map((file) => file.path);
        try {
            const imagenesUrls = files.map((file) => `/images/avatar/${file.filename}`);
            const user = await this.userService.createUser(createUserDto, imagenesUrls);
            tempFilePaths.forEach((tempPath) => {
                const finalPath = path.join('./images/avatar', path.basename(tempPath));
                fs.renameSync(tempPath, finalPath);
            });
            return user;
        }
        catch (error) {
            tempFilePaths.forEach((tempPath) => {
                if (fs.existsSync(tempPath)) {
                    fs.unlinkSync(tempPath);
                }
            });
            throw error;
        }
    }
    updateUser(email, updateUserDto) {
        return this.userService.updateUser(email, updateUserDto);
    }
    findAllUsers() {
        return this.userService.findAll();
    }
    findAllExcpt(email) {
        return this.userService.findAllExcpt(email);
    }
    findOneUser(email) {
        return this.userService.findOne(email);
    }
    login({ email, password }) {
        return this.userService.login(email, password);
    }
    delete(email) {
        return this.userService.deleteUser(email);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 1, {
        storage: (0, multer_1.diskStorage)({
            destination: './temp',
            filename: (req, file, callback) => {
                const email = req.body?.email;
                if (!email) {
                    callback(new common_1.BadRequestException('Email is required'), null);
                }
                else {
                    const filename = `${email}-avatar${path.extname(file.originalname)}`;
                    callback(null, filename);
                }
            },
        }),
    })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto, Array]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Get)('excpt/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllExcpt", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneUser", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserController);
//# sourceMappingURL=users.controller.js.map