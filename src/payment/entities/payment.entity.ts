import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from '../../students/entities/student.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.payments)
  student_id: Student;

  @Column()
  payment_last_date: Date;

  @Column()
  payment_date: Date;

  @Column()
  price: number;

  @Column()
  is_paid: boolean;

  @Column()
  total_attend: number;
}
