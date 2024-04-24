import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lid } from '../../lid/entities/lid.entity';
import { Payment } from '../../payment/entities/payment.entity';
import { StudentLesson } from '../../student_lesson/entities/student_lesson.entity';
import { StudentGroup } from './studentGroup.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  birthday: Date;

  @Column()
  male: string;

  @ManyToOne(() => Lid, (lid) => lid.students)
  lids: Lid;

  @OneToMany(() => Payment, (payment) => payment.student_id)
  payments: Payment[];

  @OneToMany(() => StudentLesson, (student_les) => student_les.student_id)
  student_lessons: StudentLesson[];

  @OneToMany(() => StudentGroup, (studentgroups) => studentgroups.students)
  studentgroups: StudentGroup[];
}
