import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Stage } from '../../stage/entities/stage.entity';
import { Branch } from '../../branch/entities/branch.entity';
import { Lesson } from '../../lesson/entities/lesson.entity';
import { StudentGroup } from '../../students/entities/studentGroup.entity';
import { Stuff } from '../../staff/entities/staff.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  group_name: string;

  @Column()
  lesson_start_time: string;

  @Column()
  lesson_continous: string;

  @Column()
  lesson_week_day: string;

  @Column()
  room_number: string;

  @Column()
  room_floor: number;

  @Column()
  lessons_quant: number;

  @Column()
  is_active: boolean;

  @ManyToOne(() => Stage, (stage) => stage.groups)
  group_stage_id: Stage;

  @ManyToOne(() => Branch, (branch) => branch.groups)
  group_branch_id: Branch;

  @ManyToMany(() => Stuff)
  @JoinTable()
  stuffs: Stuff[];

  @OneToMany(() => Lesson, (lesson) => lesson.group_id)
  lessons: Lesson[];

  @OneToMany(() => StudentGroup, (studentgroup) => studentgroup.groups)
  studentgroups: StudentGroup[];
}
