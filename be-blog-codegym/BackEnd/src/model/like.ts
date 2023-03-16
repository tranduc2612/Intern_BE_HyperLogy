import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import {User} from "./user";
import {Blog} from "./blog";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    public readonly id;
    // @OneToOne(() => User)
    @Column()
    public userId: number;
    @ManyToOne(() => Blog, (blog) => blog.likes)
    blog: Blog;
}