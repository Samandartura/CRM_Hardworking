import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Branch } from './entities/branch.entity';

@Resolver('Branch')
export class BranchResolver {
  constructor(private readonly branchService: BranchService) {}

  @Mutation(() => Branch)
  async createBranch(@Args('createBranch') createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }

  @Query(() => [Branch])
  async findAllBranches() {
    return this.branchService.findAll();
  }

  @Query(() => Branch)
  async findBranchById(@Args('id') id: string) {
    return this.branchService.findOne(+id);
  }

  @Mutation(() => Branch)
  async updateBranch(
    @Args('id') id: string,
    @Args('updateBranch') updateBranchDto: UpdateBranchDto
  ) {
    return this.branchService.update(+id, updateBranchDto);
  }

  @Mutation(() => Branch)
  async removeBranch(@Args('id') id: string) {
    return this.branchService.remove(+id);
  }
}