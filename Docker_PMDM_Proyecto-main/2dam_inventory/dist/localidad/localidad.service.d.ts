import { Provincia } from 'src/provincia/provinvia.entity';
import { Repository } from 'typeorm';
import { CreateLocalidadDto } from './localidad.dto';
import { Localidad } from './localidad.entity';
export declare class LocalidadService {
    private readonly localidadRepository;
    private readonly provinciaRepository;
    constructor(localidadRepository: Repository<Localidad>, provinciaRepository: Repository<Provincia>);
    createMultipleLocalidades(createLocalidadDtos: CreateLocalidadDto[]): Promise<Localidad[]>;
    findAll(): Promise<Localidad[]>;
    findOne(id_localidad: number): Promise<Localidad>;
}
