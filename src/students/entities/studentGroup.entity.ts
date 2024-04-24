import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from './student.entity';
import { Group } from '../../group/entities/group.entity';

@Entity()
export class StudentGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.studentgroups)
  @JoinColumn({ name: 'stuffId' })
  students: Student;

  @ManyToOne(() => Group, (group) => group.studentgroups)
  @JoinColumn({ name: 'roleId' })
  groups: Group;
}
