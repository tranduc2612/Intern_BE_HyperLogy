"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const commentService_1 = require("../service/commentService");
class CommentController {
    constructor() {
        this.showComment = async (req, res) => {
            console.log(req.params.idBlog);
            let comment = await this.commentService.findAll(req.params.idBlog);
            return res.status(200).json(comment);
        };
        this.makeComment = async (req, res) => {
            let comment = req.body;
            await this.commentService.saveAll(req.body);
            return res.status(200).json(comment);
        };
        this.deleteComment = async (req, res) => {
            await this.commentService.delete(req.params.id);
            return res.status(200).json({ message: 'delete ok' });
        };
        this.updateComment = async (req, res) => {
            await this.commentService.edit(req.params.id, req.body);
            return res.status(200).json({ message: 'update ok' });
        };
        this.commentService = new commentService_1.CommentService();
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map