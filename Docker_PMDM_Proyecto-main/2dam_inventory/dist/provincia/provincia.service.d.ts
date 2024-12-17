import { Repository } from 'typeorm';
import { CreateProvinciaDto } from './provincia.dto';
import { Provincia } from './provinvia.entity';
export declare class ProvinciaService {
    private provinciaRepository;
    constructor(provinciaRepository: Repository<Provincia>);
    findAll(): Promise<Provincia[]>;
    findOne(id_provincia: number): Promise<Provincia>;
    createProvincia(createProvinciaDto: CreateProvinciaDto[]): Promise<Provincia[]>;
}
