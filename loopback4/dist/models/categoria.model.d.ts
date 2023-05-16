import { Entity } from '@loopback/repository';
export declare class Categoria extends Entity {
    nombreC: string;
    id?: string;
    categoriaProductos: object[];
    [prop: string]: any;
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export type CategoriaWithRelations = Categoria & CategoriaRelations;
