import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Facturas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  vendedor: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  Productosvendidos: object[];

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  subtotal: number;

  @property({
    type: 'number',
    required: true,
  })
  iva: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Facturas>) {
    super(data);
  }
}

export interface FacturasRelations {
  // describe navigational properties here
}

export type FacturasWithRelations = Facturas & FacturasRelations;
