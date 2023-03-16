"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const blogController_1 = __importDefault(require("../controller/blogController"));
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.route('/').get(blogController_1.default.showAll);
exports.blogRouter.route('/').post(blogController_1.default.createBlog);
exports.blogRouter.route('/:id').delete(blogController_1.default.removeBlogs);
exports.blogRouter.route('/:id').put(blogController_1.default.editBlogs);
exports.blogRouter.route('/user/:id').get(blogController_1.default.findBlogByUser);
exports.blogRouter.route('/status/:id').get(blogController_1.default.showStatusByUser);
exports.blogRouter.route('/:id').get(blogController_1.default.showBlog);
//# sourceMappingURL=blogRouter.js.map