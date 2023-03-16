import {LikeService} from "../service/likeService";
import {Request, Response} from "express";

class LikeController {
    private likeService: LikeService

    constructor() {
        this.likeService = new LikeService()
    }

    getALl = async (req: Request, res: Response) => {
        let like = await this.likeService.findAll(req.params.idBlog)
        return res.status(200).json(like)
    }

    createLike = async (req: Request, res: Response) => {
        let like = await this.likeService.save(req.body)
        return res.status(200).json(like)
    }
    deleteLike = async (req: Request, res: Response) => {
        await this.likeService.delete(req.params.id)
        return res.status(200).json({message: 'perfect'})
    }
    findByIdUserAndIdBlog = async (req: Request, res: Response) => {
        let like = await this.likeService.findByIdUserAndIdBlog(req.body);
        return res.status(200).json(like);
    }
    getLikesByIdBlog =  async (req: Request, res: Response) => {
        let likes = await this.likeService.findLikesByIdBlog(req.params.idBlog);
        return res.status(200).json(likes);
    }
}


export default new LikeController()