import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('follows')
export class Profile {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    followerEmail?: string

    @Column()
    followingEmail?: string

    constructor(followerEmail?: string, followingEmail?: string) {

        this.followerEmail = followerEmail
        this.followingEmail = followingEmail
    }
}

