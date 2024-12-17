import { Image } from 'src/imagen/imagen.entity';
import { User } from 'src/users/users.entity';
import { PujaBid } from './pujaBid.entity';
export declare class Puja {
    id: number;
    creator: User;
    imagenes: Image[];
    pujas: PujaBid[];
    nombre: string;
    open: boolean;
    descripcion: string;
    pujaInicial: number;
    fechaFin: Date;
}
