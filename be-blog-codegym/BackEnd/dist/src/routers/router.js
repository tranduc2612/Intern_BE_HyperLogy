"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const categoryRouter_1 = require("./categoryRouter");
const commentRouter_1 = require("./commentRouter");
const blogRouter_1 = require("./blogRouter");
const likeRouter_1 = require("./likeRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/users', userRouter_1.userRouter);
exports.router.use('/categories', categoryRouter_1.categoryRouter);
exports.router.use('/comments', commentRouter_1.commentRouter);
exports.router.use('/blogs', blogRouter_1.blogRouter);
exports.router.use('/likes', likeRouter_1.likeRouter);
//# sourceMappingURL=router.js.map