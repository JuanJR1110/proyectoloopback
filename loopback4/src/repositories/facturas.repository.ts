import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Facturas, FacturasRelations} from '../models';

export class FacturasRepository extends DefaultCrudRepository<
  Facturas,
  typeof Facturas.prototype.id,
  FacturasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Facturas, dataSource);
  }
}
