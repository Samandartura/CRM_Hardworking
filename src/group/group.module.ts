import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupStuff } from '../staff/entities/groupStuff.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupStuff])],

  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
