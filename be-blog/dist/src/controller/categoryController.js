"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const categoryService_1 = require("../service/categoryService");
class CategoryController {
    constructor() {
        this.showC = async (req, res) => {
            let category = await this.categoryService.find();
            return res.status(200).json(category);
        };
        this.addC = async (req, res) => {
            let category = req.body;
            await this.categoryService.save(req.body);
            return res.status(200).json(category);
        };
        this.deleteC = async (req, res) => {
            await this.categoryService.delete(req.params.id);
            return res.status(200).json({ message: 'delete ok' });
        };
        this.updateC = async (req, res) => {
            await this.categoryService.update(req.params.id, req.body);
            return res.status(200).json({ message: 'update ok' });
        };
        this.categoryService = new categoryService_1.CategoryService();
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map