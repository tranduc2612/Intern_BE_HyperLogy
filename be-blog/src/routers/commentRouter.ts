import {Router} from "express";
import commentController from "../controller/commentController";

export const commentRouter = Router();
commentRouter.get('/:idBlog', commentController.showComment)
commentRouter.post('/', commentController.makeComment)
commentRouter.delete('/:id', commentController.deleteComment)
commentRouter.put('/:id', commentController.updateComment)
