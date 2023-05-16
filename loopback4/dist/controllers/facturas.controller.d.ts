import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Facturas } from '../models';
import { FacturasRepository } from '../repositories';
export declare class FacturasController {
    facturasRepository: FacturasRepository;
    constructor(facturasRepository: FacturasRepository);
    create(facturas: Omit<Facturas, 'id'>): Promise<Facturas>;
    count(where?: Where<Facturas>): Promise<Count>;
    find(filter?: Filter<Facturas>): Promise<Facturas[]>;
    updateAll(facturas: Facturas, where?: Where<Facturas>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Facturas>): Promise<Facturas>;
    updateById(id: string, facturas: Facturas): Promise<void>;
    replaceById(id: string, facturas: Facturas): Promise<void>;
    deleteById(id: string): Promise<void>;
}
