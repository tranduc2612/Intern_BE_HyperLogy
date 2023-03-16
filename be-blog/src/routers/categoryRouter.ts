import {Router} from "express";
import CategoryController from "../controller/categoryController";
import categoryController from "../controller/categoryController";

export const categoryRouter = Router();
categoryRouter.get('/', CategoryController.showC)
categoryRouter.post('/', CategoryController.addC)
categoryRouter.delete('/:id', CategoryController.deleteC)
categoryRouter.put('/:id',categoryController.updateC)
