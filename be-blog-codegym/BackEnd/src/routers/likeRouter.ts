import {Router} from "express";
import likeController from "../controller/likeController";


export const likeRouter = Router()
likeRouter.post('',likeController.createLike)
likeRouter.get('/:idBlog',likeController.getALl)
likeRouter.delete('/:id',likeController.deleteLike);
likeRouter.post('/idUser/idBlog', likeController.findByIdUserAndIdBlog);
likeRouter.get('/users/:idBlog',likeController.getLikesByIdBlog)


