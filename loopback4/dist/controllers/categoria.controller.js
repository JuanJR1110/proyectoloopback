"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CategoriaController = class CategoriaController {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async create(categoria) {
        return this.categoriaRepository.create(categoria);
    }
    async count(where) {
        return this.categoriaRepository.count(where);
    }
    async find(filter) {
        return this.categoriaRepository.find(filter);
    }
    async updateAll(categoria, where) {
        return this.categoriaRepository.updateAll(categoria, where);
    }
    async findById(id, filter) {
        return this.categoriaRepository.findById(id, filter);
    }
    async updateById(id, categoria) {
        await this.categoriaRepository.updateById(id, categoria);
    }
    async replaceById(id, categoria) {
        await this.categoriaRepository.replaceById(id, categoria);
    }
    async deleteById(id) {
        await this.categoriaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/categorias'),
    (0, rest_1.response)(200, {
        description: 'Categoria model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Categoria) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Categoria, {
                    title: 'NewCategoria',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/categorias/count'),
    (0, rest_1.response)(200, {
        description: 'Categoria model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Categoria)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/categorias'),
    (0, rest_1.response)(200, {
        description: 'Array of Categoria model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Categoria, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Categoria)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/categorias'),
    (0, rest_1.response)(200, {
        description: 'Categoria PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Categoria, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Categoria)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Categoria, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/categorias/{id}'),
    (0, rest_1.response)(200, {
        description: 'Categoria model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Categoria, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Categoria, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/categorias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Categoria PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Categoria, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Categoria]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/categorias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Categoria PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Categoria]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/categorias/{id}'),
    (0, rest_1.response)(204, {
        description: 'Categoria DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaController.prototype, "deleteById", null);
CategoriaController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt') // <---- ADD THIS LINE
    ,
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CategoriaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CategoriaRepository])
], CategoriaController);
exports.CategoriaController = CategoriaController;
//# sourceMappingURL=categoria.controller.js.map