import { User } from 'src/users/users.entity';
import { Puja } from './subastas.entity';
export declare class PujaBid {
    id: number;
    puja: Puja;
    user: User;
    iswinner: boolean;
    amount: number;
    email_user: string;
}
