import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Target } from "../../target/entities/target.entity";
import { Stage } from "../../stage/entities/stage.entity";
import { LidStatus } from "../../lid_status/entities/lid_status.entity";
import { ReasonLid } from "../../reason_lid/entities/reason_lid.entity";

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  first_name:string
  
  @Column()
  last_name:string

  @Column()
  phone_number:string;

  @ManyToOne(()=>Target,(target)=>target.lids)
  target_id:Target
  
  @ManyToOne(()=> Stage, (stage)=>stage.lids)
  lid_stage_id:Stage

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  test_date:Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  trial_lesson_date:Date
  
  @Column()
  trial_lesson_time:string;

  @Column()
  trial_lesson_group_id:number

  @ManyToOne(()=> LidStatus, (lidstatus)=>lidstatus.lids)
  lid_status_id:LidStatus

  @ManyToOne(()=> ReasonLid,(reasonLid)=>reasonLid.lids)
  cancel_reason_id:ReasonLid

}
