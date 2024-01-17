export interface Usuario {
     id?:number;
     nome: string;
     email: string;
     senha: string;
}
export interface Login {
     email: string;
     senha: string;
}