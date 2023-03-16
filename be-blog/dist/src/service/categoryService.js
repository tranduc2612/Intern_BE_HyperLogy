"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_1 = require("../model/category");
const data_source_1 = require("../data-source");
class CategoryService {
    constructor() {
        this.find = async () => {
            return await this.categoryRepository.find();
        };
        this.save = async (data) => {
            return await this.categoryRepository.save(data);
        };
        this.delete = async (id) => {
            let query = `DELETE FROM category WHERE id = ` + id;
            return await this.categoryRepository.query(query);
        };
        this.update = async (id, data) => {
            let query = `update category set name='${data.name}' where id=${id}`;
            return await this.categoryRepository.query(query);
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.CategoryService = CategoryService;
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map