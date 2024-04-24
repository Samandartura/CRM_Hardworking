import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  lesson_theme:string

  @Column()
  lesson_number:number

  @Column()
  group_id:number

  @Column()
  lesson_date:string
}
