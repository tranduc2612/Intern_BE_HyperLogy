import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    public readonly id;
    @Column({type: 'varchar'})
    public name: string
}