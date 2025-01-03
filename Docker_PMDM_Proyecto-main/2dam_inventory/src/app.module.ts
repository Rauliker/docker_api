import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { DataSource } from 'typeorm';
import { Image } from './imagen/imagen.entity';
import { ImagenModule } from './imagen/imagen.module';
import { Localidad } from './localidad/localidad.entity';
import { LocalidadModule } from './localidad/localidad.module';
import { ProvinciaModule } from './provincia/privincia.module';
import { Provincia } from './provincia/provinvia.entity';
import { PujaBid } from './subastas/pujaBid.entity';
import { Puja } from './subastas/subastas.entity';
import { PujaModule } from './subastas/subastas.module';
import { User } from './users/users.entity';
import { UserModule } from './users/users.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './images',
      limits: {
        fileSize: 5 * 1024 * 1024, // Límite de tamaño de archivo (5MB)
      },
      fileFilter: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        if (fileExtension !== '.jpg' && fileExtension !== '.jpeg' && fileExtension !== '.png') {
          return cb(new Error('Solo se permiten imágenes (JPG, JPEG, PNG)'), false);
        }
        cb(null, true);
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'images'),  // Ruta donde se almacenan los archivos subidos
      serveRoot: '/images',  // Prefijo para acceder a los archivos estáticos
    }),
    ConfigModule.forRoot(),
    ProvinciaModule,
    ImagenModule,
    PujaModule,
    UserModule,
    LocalidadModule,
    UtilsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        // host: 'localhost',
        // port: 3306,
        // username: 'root',
        // password: '',
        // database: 'proyecto',
        host: 'database',
        port: 3306,
        username: 'inventory',
        password: 'inventory_user',
        database: 'proyecto',
        entities: [
          Puja,
          Image,
          User,
          Localidad,
          Provincia,
          PujaBid
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
