import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Resolver('Role')
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation(() => Role)
  async createRole(@Args('createRole') createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Query(() => [Role])
  async findAllRoles() {
    return this.roleService.findAll();
  }

  @Query(() => Role)
  async findRoleByName(@Args('name') name: string) {
    return this.roleService.getRoleByName(name);
  }

  @Query(() => Role)
  async findRoleById(@Args('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Mutation(() => Role)
  async updateRole(
    @Args('id') id: string,
    @Args('updateRole') updateRoleDto: UpdateRoleDto,
  ) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Mutation(() => Role)
  async removeRole(@Args('id') id: string) {
    return this.roleService.remove(+id);
  }
}
