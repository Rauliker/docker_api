export declare class CreatePujaDto {
    nombre: string;
    open?: boolean;
    descripcion: string;
    pujaInicial: number;
    fechaFin: Date;
    creatorId: string;
    imagenes: string[];
}
export declare class MakeBidDto {
    userId: string;
    pujaId: number;
    iswinner: boolean;
    bidAmount: number;
    email_user: string;
}
export declare class UpdatePujaDto {
    nombre?: string;
    open?: boolean;
    descripcion?: string;
    pujaInicial?: number;
    fechaFin?: Date;
}
