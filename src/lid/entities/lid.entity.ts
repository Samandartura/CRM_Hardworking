import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Stage } from '../../stage/entities/stage.entity';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';
import { ReasonLid } from '../../reason_lid/entities/reason_lid.entity';
import { Student } from '../../students/entities/student.entity';
import { Target } from '../../target/entities/target.entity';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @ManyToOne(() => Target, (target) => target.lids)
  target_id: Target;

  @ManyToOne(() => Stage, (lidStage) => lidStage.lids)
  lid_stage_id: Stage;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  test_date: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  trial_lesson_: Date;

  @Column()
  trial_lesson_date: number;

  @Column()
  trial_lesson_time: string;

  @Column()
  trial_lesson_group_id: number;

  @ManyToOne(() => LidStatus, (lidStatus) => lidStatus.lids)
  lid_status_id: LidStatus;

  @ManyToOne(() => ReasonLid, (reasonLid) => reasonLid.lids)
  cancel_reason_id: ReasonLid;

  @OneToMany(() => Student, (student) => student.lids)
  students: Student[];
}
