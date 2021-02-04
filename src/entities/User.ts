import { Column, Entity,  JoinTable,  ManyToMany,  ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Article } from "./Article";

@Entity('users')
export class User {

    @PrimaryColumn()
    email: string
    
    @Column({unique: true, nullable: false})
    username: string

    @Column({nullable: true})
    password?: string

    @Column({type: 'text',nullable: true})
    bio?: string
 
    @Column({nullable:true})
    image?: string

    token?: string

    @ManyToMany(() => Article)
    @JoinTable()
    favorites?: Article[]
    
    @OneToMany(type => Article, article => article.author)
    articles: Article[]

    constructor(email: string, username: string, password?: string, image?: string, bio?:string, favorites?: Article[]) {
      this.email = email
      this.username = username
      this.password = password
      this.image = image
      this.bio = bio
      this.favorites = favorites
    }
}
