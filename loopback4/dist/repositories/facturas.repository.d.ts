import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Facturas, FacturasRelations } from '../models';
export declare class FacturasRepository extends DefaultCrudRepository<Facturas, typeof Facturas.prototype.id, FacturasRelations> {
    constructor(dataSource: DbDataSource);
}
