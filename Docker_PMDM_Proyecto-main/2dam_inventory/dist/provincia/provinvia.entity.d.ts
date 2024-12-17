import { Localidad } from 'src/localidad/localidad.entity';
import { User } from 'src/users/users.entity';
export declare class Provincia {
    id_provincia: number;
    nombre: string;
    localidades: Localidad[];
    users: User[];
}
