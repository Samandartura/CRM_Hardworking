import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Role } from './role.entity';
import { Stuff } from '../../staff/entities/staff.entity';

@Entity()
export class StuffRole {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Stuff, (stuff) => stuff.roles)
  @JoinColumn({ name: 'stuffId' })
  stuff: Stuff;

  @ManyToOne(() => Role, (role) => role.stuffs)
  @JoinColumn({ name: 'roleId' })
  role: Role;
}
