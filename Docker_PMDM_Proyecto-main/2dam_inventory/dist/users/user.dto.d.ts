export declare class CreateUserDto {
    email: string;
    username: string;
    password: string;
    avatar?: string;
    role: number;
    banned?: boolean;
    balance?: number;
    provinciaId: number;
    localidadId: number;
    calle: string;
}
export declare class UpdateUserDto {
    email?: string;
    username?: string;
    password?: string;
    avatar?: string;
    banned?: boolean;
    balance?: number;
    provinciaId?: number;
    localidadId?: number;
    calle?: string;
}
