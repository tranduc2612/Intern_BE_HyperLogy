import { Blog } from "./blog";
import { Comment } from "./comment";
export declare class User {
    readonly id: number;
    username: string;
    password: string;
    avatar: string;
    blogs: Blog[];
    comments: Comment[];
}
