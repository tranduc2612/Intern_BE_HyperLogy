"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controller/categoryController"));
const categoryController_2 = __importDefault(require("../controller/categoryController"));
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.get('/', categoryController_1.default.showC);
exports.categoryRouter.post('/', categoryController_1.default.addC);
exports.categoryRouter.delete('/:id', categoryController_1.default.deleteC);
exports.categoryRouter.put('/:id', categoryController_2.default.updateC);
//# sourceMappingURL=categoryRouter.js.map