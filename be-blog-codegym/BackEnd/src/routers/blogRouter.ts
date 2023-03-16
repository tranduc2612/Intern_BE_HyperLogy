import {Router} from "express";
import BlogController from "../controller/blogController";

export const blogRouter = Router();
blogRouter.route('/').get(BlogController.showAll);
blogRouter.route('/').post(BlogController.createBlog);
blogRouter.route('/:id').delete(BlogController.removeBlogs)
blogRouter.route('/:id').put(BlogController.editBlogs)
blogRouter.route('/user/:id').get(BlogController.findBlogByUser)
blogRouter.route('/status/:id').get(BlogController.showStatusByUser)
blogRouter.route('/:id').get(BlogController.showBlog)




