import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ActivateGroupDto } from './dto/activate.dto';
import { Group } from './entities/group.entity';

@Resolver('Group')
export class GroupResolver {
  constructor(private readonly groupService: GroupService) {}

  @Mutation(() => Group)
  async createGroup(@Args('createGroup') createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Query(() => [Group])
  async findAllGroups() {
    return this.groupService.findAll();
  }

  @Query(() => Group)
  async findGroupById(@Args('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @Mutation(() => Group)
  async updateGroup(
    @Args('id') id: string,
    @Args('updateGroup') updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @Mutation(() => Group)
  async removeGroup(@Args('id') id: string) {
    return this.groupService.remove(+id);
  }

  @Mutation(() => Group)
  async activateGroup(
    @Args('activateGroup') activateGroupDto: ActivateGroupDto,
  ) {
    return this.groupService.activateGroup(activateGroupDto);
  }
}