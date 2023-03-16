import { Request, Response } from "express";
export declare class CommentController {
    private commentService;
    constructor();
    showComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    makeComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateComment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CommentController;
export default _default;
