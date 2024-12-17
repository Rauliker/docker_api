declare const _default: {
    id: number;
    nombre: string;
    descripcion: string;
    pujaInicial: string;
    fechaFin: string;
    creator: {
        email: string;
        username: string;
        password: string;
        role: number;
        banned: boolean;
        balance: string;
    };
    imagenes: {
        id: number;
        url: string;
    }[];
    bids: {
        id: number;
        amount: string;
        puja: {
            id: number;
            nombre: string;
            descripcion: string;
            pujaInicial: string;
            fechaFin: string;
        };
        user: {
            email: string;
            username: string;
            password: string;
            role: number;
            banned: boolean;
            balance: string;
        };
    }[];
}[];
export default _default;
