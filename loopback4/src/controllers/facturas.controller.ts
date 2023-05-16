import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Facturas} from '../models';
import {FacturasRepository} from '../repositories';
@authenticate('jwt')  // <---- ADD THIS LINE
export class FacturasController {
  constructor(
    @repository(FacturasRepository)
    public facturasRepository : FacturasRepository,
  ) {}

  @post('/facturas')
  @response(200, {
    description: 'Facturas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Facturas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturas, {
            title: 'NewFacturas',
            exclude: ['id'],
          }),
        },
      },
    })
    facturas: Omit<Facturas, 'id'>,
  ): Promise<Facturas> {
    return this.facturasRepository.create(facturas);
  }

  @get('/facturas/count')
  @response(200, {
    description: 'Facturas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Facturas) where?: Where<Facturas>,
  ): Promise<Count> {
    return this.facturasRepository.count(where);
  }

  @get('/facturas')
  @response(200, {
    description: 'Array of Facturas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Facturas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Facturas) filter?: Filter<Facturas>,
  ): Promise<Facturas[]> {
    return this.facturasRepository.find(filter);
  }

  @patch('/facturas')
  @response(200, {
    description: 'Facturas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturas, {partial: true}),
        },
      },
    })
    facturas: Facturas,
    @param.where(Facturas) where?: Where<Facturas>,
  ): Promise<Count> {
    return this.facturasRepository.updateAll(facturas, where);
  }

  @get('/facturas/{id}')
  @response(200, {
    description: 'Facturas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Facturas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Facturas, {exclude: 'where'}) filter?: FilterExcludingWhere<Facturas>
  ): Promise<Facturas> {
    return this.facturasRepository.findById(id, filter);
  }

  @patch('/facturas/{id}')
  @response(204, {
    description: 'Facturas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturas, {partial: true}),
        },
      },
    })
    facturas: Facturas,
  ): Promise<void> {
    await this.facturasRepository.updateById(id, facturas);
  }

  @put('/facturas/{id}')
  @response(204, {
    description: 'Facturas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() facturas: Facturas,
  ): Promise<void> {
    await this.facturasRepository.replaceById(id, facturas);
  }

  @del('/facturas/{id}')
  @response(204, {
    description: 'Facturas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.facturasRepository.deleteById(id);
  }
}
