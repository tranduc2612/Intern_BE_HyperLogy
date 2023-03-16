import {CategoryService} from "../service/categoryService";
import {Request, Response} from "express";

export class CategoryController {
    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService()
    }

    showC = async (req: Request, res: Response) => {
        let category = await this.categoryService.find()
        return res.status(200).json(category)
    }
    addC = async (req: Request, res: Response) => {
        let category = req.body
        await this.categoryService.save(req.body)
        return res.status(200).json(category)
    }
    deleteC = async (req:Request,res:Response)=>{
        await this.categoryService.delete(req.params.id)
        return res.status(200).json({message: 'delete ok'})
    }
    updateC = async (req:Request,res:Response)=>{
        await this.categoryService.update(req.params.id,req.body)
        return res.status(200).json({message:'update ok'})
    }


}

export default new CategoryController()