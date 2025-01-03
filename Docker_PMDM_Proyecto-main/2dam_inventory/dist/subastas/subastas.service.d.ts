import { Image } from 'src/imagen/imagen.entity';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { PujaBid } from './pujaBid.entity';
import { CreatePujaDto, MakeBidDto, UpdatePujaDto } from './subastas.dto';
import { Puja } from './subastas.entity';
export declare class PujaService {
    private pujaRepository;
    private userRepository;
    private readonly pujaBidRepository;
    private imagenRepository;
    constructor(pujaRepository: Repository<Puja>, userRepository: Repository<User>, pujaBidRepository: Repository<PujaBid>, imagenRepository: Repository<Image>);
    createPuja(createPujaDto: CreatePujaDto): Promise<Puja>;
    getBidsByUser(userEmail: string): Promise<PujaBid[]>;
    deletePuja(id: number): Promise<string>;
    getPujaByOtherUser(userEmail: string): Promise<any[]>;
    getPujasByUser(userEmail: string): Promise<Puja[]>;
    private getPujaActual;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    findOneUsers(id: number): Promise<any>;
    updatePuja(id: number, updatePujaDto: UpdatePujaDto): Promise<any>;
    makeBid(makeBidDto: MakeBidDto): Promise<PujaBid>;
    getBidsByPuja(pujaId: number): Promise<PujaBid[]>;
    pay(pujaId: number): Promise<string>;
}
