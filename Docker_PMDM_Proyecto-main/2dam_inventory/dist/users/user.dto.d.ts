export declare class CreateUserDto {
    email: string;
    username: string;
    password: string;
    role: number;
    banned?: boolean;
    balance?: number;
    provinciaId?: number;
    localidadId?: number;
    calle: string;
}
export declare class UpdateUserDto {
    username?: string;
    password?: string;
    banned?: boolean;
    balance?: number;
    provinciaId?: number;
    localidadId?: number;
    calle?: string;
}
