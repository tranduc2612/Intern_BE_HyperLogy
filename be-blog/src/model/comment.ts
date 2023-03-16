import {Column, Entity, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {JoinColumn} from "typeorm/browser";
import {Blog} from "./blog";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    public readonly id;
    @Column({type: 'varchar'})
    public content: string;
    @ManyToOne(() => Blog, (blog) => blog.comments)
    public blog: Blog;
    @ManyToOne(() => User, (user) => user.comments)
    public user: User;
    @Column({default: -1})
    public externalCommentId: number;
}