import { CreatePujaDto, MakeBidDto, UpdatePujaDto } from './subastas.dto';
import { PujaService } from './subastas.service';
export declare class PujaController {
    private readonly pujaService;
    constructor(pujaService: PujaService);
    createPuja(createPujaDto: CreatePujaDto, files: Express.Multer.File[]): Promise<import("./subastas.entity").Puja>;
    findAllPujas(): Promise<any[]>;
    updatePuja(id: number, updatePujaDto: UpdatePujaDto): Promise<any>;
    findOnePuja(id: number): Promise<any>;
    findOtherPuja(id: string): Promise<any[]>;
    findMyPuja(id: string): Promise<import("./subastas.entity").Puja[]>;
    makeBid(makeBidDto: MakeBidDto): Promise<import("./pujaBid.entity").PujaBid>;
    getBid(id: number): Promise<import("./pujaBid.entity").PujaBid[]>;
    getusersBid(email: string): Promise<import("./pujaBid.entity").PujaBid[]>;
    deletePuja(id: number): Promise<string>;
    pagar(id: number): Promise<string>;
}
