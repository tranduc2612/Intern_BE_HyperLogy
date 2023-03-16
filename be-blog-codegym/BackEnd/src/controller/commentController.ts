import {CommentService} from "../service/commentService";
import {Request, Response} from "express";

export class CommentController {
    private commentService: CommentService

    constructor() {
        this.commentService = new CommentService()
    }

    showComment = async (req: Request, res: Response) => {
        console.log(req.params.idBlog)
        let comment = await this.commentService.findAll(req.params.idBlog)
        return res.status(200).json(comment)
    }
    makeComment = async (req: Request, res: Response) => {
        let comment = req.body
        await this.commentService.saveAll(req.body)
        return res.status(200).json(comment)
    }
    deleteComment = async (req: Request, res: Response) => {
        await this.commentService.delete(req.params.id)
        return res.status(200).json({message: 'delete ok'})
    }
    updateComment = async (req: Request, res: Response) => {
        await this.commentService.edit(req.params.id, req.body)
        return res.status(200).json({message: 'update ok'})
    }

}

export default new CommentController()

