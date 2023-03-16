import { Request, Response } from "express";
export declare class BlogService {
    private blogRepository;
    constructor();
    find: () => Promise<any>;
    create: (blog: any) => Promise<any>;
    update: (id: any, blog: any) => Promise<any>;
    findByUser: (id: any) => Promise<any>;
    findByStatus: (id: any) => Promise<any>;
    delete: (req: Request, res: Response) => Promise<void>;
    findU: (id: any) => Promise<any>;
    showStatus: (id: any) => Promise<any>;
    showBlog: (id: any) => Promise<any>;
}
