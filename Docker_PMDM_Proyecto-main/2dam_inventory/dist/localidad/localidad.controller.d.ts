import { CreateLocalidadDto } from './localidad.dto';
import { LocalidadService } from './localidad.service';
export declare class LocalidadController {
    private readonly localidadService;
    constructor(localidadService: LocalidadService);
    createLocalidad(createLocalidadDto: CreateLocalidadDto[]): Promise<import("./localidad.entity").Localidad[]>;
    findAllLocalidades(): Promise<import("./localidad.entity").Localidad[]>;
    findOneLocalidad(id: number): Promise<import("./localidad.entity").Localidad>;
}
