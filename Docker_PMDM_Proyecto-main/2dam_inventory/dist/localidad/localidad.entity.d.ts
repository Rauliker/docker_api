import { Provincia } from 'src/provincia/provinvia.entity';
import { User } from 'src/users/users.entity';
export declare class Localidad {
    id_localidad: number;
    nombre: string;
    provincia: Provincia;
    users: User[];
}
