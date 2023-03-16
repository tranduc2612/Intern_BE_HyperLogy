import { Request, Response } from "express";
declare class BlogController {
    private blogService;
    constructor();
    showAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createBlog: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editBlogs: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    removeBlogs: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findBlogByUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showStatusByUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    showBlog: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: BlogController;
export default _default;
