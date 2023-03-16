"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const data_source_1 = require("../data-source");
const comment_1 = require("../model/comment");
class CommentService {
    constructor() {
        this.findAll = async (idBlog) => {
            return await this.commentRepository.find({
                relations: {
                    blog: true,
                    user: true
                }, where: {
                    blog: {
                        id: idBlog
                    }
                }
            });
        };
        this.saveAll = async (data) => {
            return await this.commentRepository.save(data);
        };
        this.delete = async (id) => {
            const query = `DELETE
                       FROM comment
                       WHERE id = ` + id;
            return await this.commentRepository.query(query);
        };
        this.edit = async (id, data) => {
            const query = `UPDATE comment
                       SET content = '${data.content}'
                       WHERE id = ${id}`;
            return await this.commentRepository.query(query);
        };
        this.commentRepository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
    }
}
exports.CommentService = CommentService;
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map