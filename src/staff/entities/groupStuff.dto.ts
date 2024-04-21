import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Group } from '../../group/entities/group.entity';
import { Stuff } from './staff.entity';

@Entity()
export class GroupStuff {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Stuff, (stuff) => stuff.groups)
  @JoinColumn({ name: 'groupId' })
  stuff: Stuff;

  @ManyToOne(() => Group, (role) => role.stuffs)
  @JoinColumn({ name: 'roleId' })
  group: Group;
}
