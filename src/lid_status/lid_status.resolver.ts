import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LidStatusService } from './lid_status.service';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { LidStatus } from './entities/lid_status.entity';

@Resolver('LidStatus')
export class LidStatusResolver {
  constructor(private readonly lidStatusService: LidStatusService) {}

  @Mutation(() => LidStatus)
  async createLidStatus(
    @Args('createLidStatus') createLidStatusDto: CreateLidStatusDto,
  ) {
    return this.lidStatusService.create(createLidStatusDto);
  }

  @Query(() => [LidStatus])
  async findAllLidStatuses() {
    return this.lidStatusService.findAll();
  }

  @Query(() => LidStatus)
  async findLidStatusById(@Args('id') id: string) {
    return this.lidStatusService.findOne(+id);
  }

  @Mutation(() => LidStatus)
  async updateLidStatus(
    @Args('id') id: string,
    @Args('updateLidStatus') updateLidStatusDto: UpdateLidStatusDto,
  ) {
    return this.lidStatusService.update(+id, updateLidStatusDto);
  }

  @Mutation(() => LidStatus)
  async removeLidStatus(@Args('id') id: string) {
    return this.lidStatusService.remove(+id);
  }
}
