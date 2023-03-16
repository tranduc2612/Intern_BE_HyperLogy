"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeRouter = void 0;
const express_1 = require("express");
const likeController_1 = __importDefault(require("../controller/likeController"));
exports.likeRouter = (0, express_1.Router)();
exports.likeRouter.post('', likeController_1.default.createLike);
exports.likeRouter.get('/:idBlog', likeController_1.default.getALl);
exports.likeRouter.delete('/:id', likeController_1.default.deleteLike);
exports.likeRouter.post('/idUser/idBlog', likeController_1.default.findByIdUserAndIdBlog);
exports.likeRouter.get('/users/:idBlog', likeController_1.default.getLikesByIdBlog);
//# sourceMappingURL=likeRouter.js.map