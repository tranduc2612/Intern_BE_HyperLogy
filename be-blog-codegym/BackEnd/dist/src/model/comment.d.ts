import { User } from "./user";
import { Blog } from "./blog";
export declare class Comment {
    readonly id: any;
    content: string;
    blog: Blog;
    user: User;
    externalCommentId: number;
}
