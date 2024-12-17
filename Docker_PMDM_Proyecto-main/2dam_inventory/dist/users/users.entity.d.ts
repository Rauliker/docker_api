import { Localidad } from 'src/localidad/localidad.entity';
import { Provincia } from 'src/provincia/provinvia.entity';
import { Puja } from 'src/sujastas/puja.entity';
import { PujaBid } from 'src/sujastas/pujaBid.entity';
export declare class User {
    email: string;
    username: string;
    password: string;
    role: number;
    banned: boolean;
    balance?: number;
    provincia: Provincia;
    localidad: Localidad;
    calle: string;
    createdPujas: Puja[];
    pujaBids: PujaBid[];
}
