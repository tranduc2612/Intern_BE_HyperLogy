import { Request, Response } from "express";
declare class LikeController {
    private likeService;
    constructor();
    getALl: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    createLike: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteLike: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByIdUserAndIdBlog: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getLikesByIdBlog: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: LikeController;
export default _default;
