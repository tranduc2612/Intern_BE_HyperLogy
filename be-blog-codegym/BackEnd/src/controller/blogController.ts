import {Request, Response} from "express";
import {BlogService} from "../service/blogService";

class BlogController {
    private blogService: BlogService;

    constructor() {
        this.blogService = new BlogService();
    }

    showAll = async (req: Request, res: Response) => {
        let blogs = await this.blogService.find()
        return res.status(200).json(blogs);
    }

    createBlog = async (req: Request, res: Response) => {
        let blog = await this.blogService.create(req.body)
        return res.status(200).json(blog);
    }

    editBlogs = async (req: Request, res: Response) => {
        await this.blogService.update(req.params.id, req.body)
        return res.status(200).json({message: 'ok'});

    }

    removeBlogs = async (req: Request, res: Response) => {
        let blogs = await this.blogService.delete(req, res)
        return res.json(blogs);
    }
    findBlogByUser = async (req:Request,res:Response)=>{
        let blogs = await this.blogService.findByUser(req.params.id)
        return res.json(blogs)
    }
    showStatusByUser  = async (req:Request,res:Response)=> {
        let blogs = await this.blogService.showStatus(req.params.id)
        return res.json(blogs)
    }
    showBlog = async (req:Request,res:Response)=>{
        let blogs = await this.blogService.showBlog(req.params.id)
        return res.json(blogs)
    }

}

export default new BlogController;


