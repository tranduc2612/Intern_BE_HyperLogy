import {Router} from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {commentRouter} from "./commentRouter";
import {blogRouter} from "./blogRouter";
import {likeRouter} from "./likeRouter";

export const router = Router();
router.use('/users', userRouter);
router.use('/categories', categoryRouter)
router.use('/comments', commentRouter)
router.use('/blogs', blogRouter)
router.use('/likes', likeRouter)
