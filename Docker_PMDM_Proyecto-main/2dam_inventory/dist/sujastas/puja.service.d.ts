import { Image } from 'src/imagen/imagen.entity';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { CreatePujaDto, MakeBidDto } from './puja.dto';
import { Puja } from './puja.entity';
import { PujaBid } from './pujaBid.entity';
export declare class PujaService {
    private pujaRepository;
    private userRepository;
    private readonly pujaBidRepository;
    private imagenRepository;
    constructor(pujaRepository: Repository<Puja>, userRepository: Repository<User>, pujaBidRepository: Repository<PujaBid>, imagenRepository: Repository<Image>);
    createPuja(createPujaDto: CreatePujaDto): Promise<Puja>;
    getBidsByUser(userEmail: string): Promise<PujaBid[]>;
    deletePuja(id: number): Promise<string>;
    private getPujaActual;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    findOneUsers(id: number): Promise<any>;
    makeBid(makeBidDto: MakeBidDto): Promise<PujaBid>;
    getBidsByPuja(pujaId: number): Promise<PujaBid[]>;
    pay(pujaId: number): Promise<string>;
}
