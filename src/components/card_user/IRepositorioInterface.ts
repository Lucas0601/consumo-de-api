interface IRepositorio {
    name: string;
    description: string;
    owner: {
        login: string;
    }    
}

export type {IRepositorio}