import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StageService } from './stage.service';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { Stage } from './entities/stage.entity';

@Resolver('Stage')
export class StageResolver {
  constructor(private readonly stageService: StageService) {}

  @Mutation(() => Stage)
  async createStage(@Args('createStage') createStageDto: CreateStageDto) {
    return this.stageService.create(createStageDto);
  }

  @Query(() => [Stage])
  async findAllStages() {
    return this.stageService.findAll();
  }

  @Query(() => Stage)
  async findStageById(@Args('id') id: string) {
    return this.stageService.findOne(+id);
  }

  @Mutation(() => Stage)
  async updateStage(
    @Args('id') id: string,
    @Args('updateStage') updateStageDto: UpdateStageDto,
  ) {
    return this.stageService.update(+id, updateStageDto);
  }

  @Mutation(() => Stage)
  async removeStage(@Args('id') id: string) {
    return this.stageService.remove(+id);
  }
}
