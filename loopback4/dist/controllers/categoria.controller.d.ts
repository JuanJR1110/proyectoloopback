import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Categoria } from '../models';
import { CategoriaRepository } from '../repositories';
export declare class CategoriaController {
    categoriaRepository: CategoriaRepository;
    constructor(categoriaRepository: CategoriaRepository);
    create(categoria: Omit<Categoria, 'id'>): Promise<Categoria>;
    count(where?: Where<Categoria>): Promise<Count>;
    find(filter?: Filter<Categoria>): Promise<Categoria[]>;
    updateAll(categoria: Categoria, where?: Where<Categoria>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Categoria>): Promise<Categoria>;
    updateById(id: string, categoria: Categoria): Promise<void>;
    replaceById(id: string, categoria: Categoria): Promise<void>;
    deleteById(id: string): Promise<void>;
}
