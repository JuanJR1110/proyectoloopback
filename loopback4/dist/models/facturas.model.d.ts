import { Entity } from '@loopback/repository';
export declare class Facturas extends Entity {
    id?: string;
    vendedor: string;
    Productosvendidos: object[];
    fecha: string;
    subtotal: number;
    iva: number;
    total: number;
    [prop: string]: any;
    constructor(data?: Partial<Facturas>);
}
export interface FacturasRelations {
}
export type FacturasWithRelations = Facturas & FacturasRelations;
