import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { ActivateGroupDto } from './dto/activate.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private readonly groupRepo: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    return this.groupRepo.save(createGroupDto);
  }

  async findAll() {
    return this.groupRepo.find({
      relations: { group_stage_id: true, stuffs: true, group_branch_id: true },
    });
  }

  async findOne(id: number) {
    return this.groupRepo.findOneBy({ id });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    await this.groupRepo.update({ id }, updateGroupDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    return this.groupRepo.delete({ id });
  }

  async activateGroup(avtivateGroupDto: ActivateGroupDto) {
    const stuff = await this.groupRepo.findOne({
      where: { id: avtivateGroupDto.groupId },
    });

    if (stuff) {
      stuff.is_active = !stuff.is_active; 

      await this.groupRepo.save(stuff); 

      return stuff;
    }

    throw new NotFoundException('stuff not found');
  }
}
