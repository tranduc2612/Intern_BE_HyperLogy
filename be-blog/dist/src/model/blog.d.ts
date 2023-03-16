import { Category } from "./category";
import { User } from "./user";
import { Like } from "./like";
import { Comment } from "./comment";
export declare class Blog {
    readonly id: number;
    title: string;
    image: string;
    status: number;
    createTime: string;
    description: string;
    categories: Category[];
    user: User;
    likes: Like[];
    comments: Comment[];
}
