import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({type: 'text'})
    body: string

    @ManyToOne(() => User)
    author: User

    constructor(body : string, author: User) {
        this.body = body
        this.author = author
    }
}