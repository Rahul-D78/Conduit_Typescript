import { Column, CreateDateColumn, Entity, PrimaryColumn, Unique, UpdateDateColumn } from "typeorm";
// import { User } from "./User";

@Unique(["slug"])
@Entity('articles')
export class Article {
   @PrimaryColumn({length: 40})
   slug: string

   @Column({length: 50})
   title?: string

   @Column({length: 100, nullable: true})
   description: string

   @Column({type: 'text'})
   body:string

   @Column({type: 'text', nullable:true})
   tagList?: string[]

   @Column({default:0})
   favoritesCount?: number 

   @CreateDateColumn()
   createdAt: Date

   @UpdateDateColumn()
   updatedAt: Date

   // @ManyToOne(() => User)
   // author: User

   //TODO: author: User

   constructor(slug: string, title: string ,description: string, body: string,tagList: string[]) {

      this.slug = slug,
      this.title = title,
      this.description = description,
      this.body = body
      this.tagList = tagList
      // this.author = author
   }
}