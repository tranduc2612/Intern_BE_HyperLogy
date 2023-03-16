import { Request, Response } from "express";
export declare class CategoryController {
    private categoryService;
    constructor();
    showC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateC: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CategoryController;
export default _default;
