import {AppDataSource} from "../data-source";
import {Like} from "../model/like";


export class LikeService {
    private likeRepository: any

    constructor() {
        this.likeRepository = AppDataSource.getRepository(Like)
    }

    findAll = async (idBlog) => {
        return await this.likeRepository.find({
            where: {
                blog: {
                    id: idBlog
                }
            }
        })
    }
    save = async (like) => {
        return await this.likeRepository.save(like)
    }
    delete = async (id) => {
        return await this.likeRepository.delete(id)
    }

    findByIdUserAndIdBlog = async (data) => {
        return await this.likeRepository.find({
            where: {
                userId: data.idUser,
                blog: {
                    id: data.idBlog
                }
            }
        });
    }
    findLikesByIdBlog = async (id) => {
        let query = 'select u.username from `like` l join user u on u.id = l.userId where l.blogId =' + id;
        return await this.likeRepository.query(query);
    }
}
