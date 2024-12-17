import { CreateProvinciaDto } from './provincia.dto';
import { ProvinciaService } from './provincia.service';
export declare class ProvinciaController {
    private readonly provinciaService;
    constructor(provinciaService: ProvinciaService);
    createProvincia(createProvinciaDto: CreateProvinciaDto[]): Promise<import("./provinvia.entity").Provincia[]>;
    findAllProvincias(): Promise<import("./provinvia.entity").Provincia[]>;
    findOneProvincia(id: number): Promise<import("./provinvia.entity").Provincia>;
}
