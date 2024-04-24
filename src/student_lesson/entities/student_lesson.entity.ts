import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../../students/entities/student.entity";


@Entity()
export class StudentLesson {
  @PrimaryGeneratedColumn()
  id:number

  @ManyToOne(()=>Student, (student)=>student.id)
  student_id:Student

  @Column()
  is_there:boolean

  @Column()
  reason:string;

  @Column()
  be_paid:boolean
}
