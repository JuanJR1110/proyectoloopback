"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FacturasController = class FacturasController {
    constructor(facturasRepository) {
        this.facturasRepository = facturasRepository;
    }
    async create(facturas) {
        return this.facturasRepository.create(facturas);
    }
    async count(where) {
        return this.facturasRepository.count(where);
    }
    async find(filter) {
        return this.facturasRepository.find(filter);
    }
    async updateAll(facturas, where) {
        return this.facturasRepository.updateAll(facturas, where);
    }
    async findById(id, filter) {
        return this.facturasRepository.findById(id, filter);
    }
    async updateById(id, facturas) {
        await this.facturasRepository.updateById(id, facturas);
    }
    async replaceById(id, facturas) {
        await this.facturasRepository.replaceById(id, facturas);
    }
    async deleteById(id) {
        await this.facturasRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/facturas'),
    (0, rest_1.response)(200, {
        description: 'Facturas model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Facturas) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturas, {
                    title: 'NewFacturas',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/facturas/count'),
    (0, rest_1.response)(200, {
        description: 'Facturas model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Facturas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/facturas'),
    (0, rest_1.response)(200, {
        description: 'Array of Facturas model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Facturas, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Facturas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/facturas'),
    (0, rest_1.response)(200, {
        description: 'Facturas PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturas, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Facturas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Facturas, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/facturas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Facturas model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturas, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Facturas, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/facturas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Facturas PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Facturas, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Facturas]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/facturas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Facturas PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Facturas]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/facturas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Facturas DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FacturasController.prototype, "deleteById", null);
FacturasController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt') // <---- ADD THIS LINE
    ,
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FacturasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FacturasRepository])
], FacturasController);
exports.FacturasController = FacturasController;
//# sourceMappingURL=facturas.controller.js.map