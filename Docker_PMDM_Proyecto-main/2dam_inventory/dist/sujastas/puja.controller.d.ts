import { CreatePujaDto, MakeBidDto } from './puja.dto';
import { PujaService } from './puja.service';
export declare class PujaController {
    private readonly pujaService;
    constructor(pujaService: PujaService);
    createPuja(createPujaDto: CreatePujaDto, files: Express.Multer.File[]): Promise<import("./puja.entity").Puja>;
    findAllPujas(): Promise<any[]>;
    findOnePuja(id: number): Promise<any>;
    makeBid(makeBidDto: MakeBidDto): Promise<import("./pujaBid.entity").PujaBid>;
    getBid(id: number): Promise<import("./pujaBid.entity").PujaBid[]>;
    getusersBid(email: string): Promise<import("./pujaBid.entity").PujaBid[]>;
    deletePuja(id: number): Promise<string>;
    pagar(id: number): Promise<string>;
}
