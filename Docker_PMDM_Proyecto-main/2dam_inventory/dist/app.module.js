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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const platform_express_1 = require("@nestjs/platform-express");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path = require("path");
const typeorm_2 = require("typeorm");
const imagen_entity_1 = require("./imagen/imagen.entity");
const imagen_module_1 = require("./imagen/imagen.module");
const localidad_entity_1 = require("./localidad/localidad.entity");
const localidad_module_1 = require("./localidad/localidad.module");
const privincia_module_1 = require("./provincia/privincia.module");
const provinvia_entity_1 = require("./provincia/provinvia.entity");
const pujaBid_entity_1 = require("./subastas/pujaBid.entity");
const subastas_entity_1 = require("./subastas/subastas.entity");
const subastas_module_1 = require("./subastas/subastas.module");
const users_entity_1 = require("./users/users.entity");
const users_module_1 = require("./users/users.module");
const utils_module_1 = require("./utils/utils.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './images',
                limits: {
                    fileSize: 5 * 1024 * 1024,
                },
                fileFilter: (req, file, cb) => {
                    const fileExtension = path.extname(file.originalname);
                    if (fileExtension !== '.jpg' && fileExtension !== '.jpeg' && fileExtension !== '.png') {
                        return cb(new Error('Solo se permiten imágenes (JPG, JPEG, PNG)'), false);
                    }
                    cb(null, true);
                },
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'images'),
                serveRoot: '/images',
            }),
            config_1.ConfigModule.forRoot(),
            privincia_module_1.ProvinciaModule,
            imagen_module_1.ImagenModule,
            subastas_module_1.PujaModule,
            users_module_1.UserModule,
            localidad_module_1.LocalidadModule,
            utils_module_1.UtilsModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '',
                    database: 'proyecto',
                    entities: [
                        subastas_entity_1.Puja,
                        imagen_entity_1.Image,
                        users_entity_1.User,
                        localidad_entity_1.Localidad,
                        provinvia_entity_1.Provincia,
                        pujaBid_entity_1.PujaBid
                    ],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map