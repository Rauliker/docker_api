import { Localidad } from 'src/localidad/localidad.entity';
import { Provincia } from 'src/provincia/provinvia.entity';
import { PujaBid } from 'src/subastas/pujaBid.entity';
import { Puja } from 'src/subastas/subastas.entity';
export declare class User {
    email: string;
    username: string;
    password: string;
    avatar: string;
    role: number;
    banned: boolean;
    balance?: number;
    provincia: Provincia;
    localidad: Localidad;
    calle: string;
    createdPujas: Puja[];
    pujaBids: PujaBid[];
}
