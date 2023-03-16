"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const data_source_1 = require("../data-source");
const like_1 = require("../model/like");
class LikeService {
    constructor() {
        this.findAll = async (idBlog) => {
            return await this.likeRepository.find({
                where: {
                    blog: {
                        id: idBlog
                    }
                }
            });
        };
        this.save = async (like) => {
            return await this.likeRepository.save(like);
        };
        this.delete = async (id) => {
            return await this.likeRepository.delete(id);
        };
        this.findByIdUserAndIdBlog = async (data) => {
            return await this.likeRepository.find({
                where: {
                    userId: data.idUser,
                    blog: {
                        id: data.idBlog
                    }
                }
            });
        };
        this.findLikesByIdBlog = async (id) => {
            let query = 'select u.username from `like` l join user u on u.id = l.userId where l.blogId =' + id;
            return await this.likeRepository.query(query);
        };
        this.likeRepository = data_source_1.AppDataSource.getRepository(like_1.Like);
    }
}
exports.LikeService = LikeService;
//# sourceMappingURL=likeService.js.map