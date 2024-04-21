import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepo: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.roleRepo.save(createRoleDto);
  }

  async findAll() {
    return this.roleRepo.find({ relations: { stuffs: true } });
  }

  async getRoleByName(name: string) {
    return this.roleRepo.findOneBy({ name });
  }

  async findOne(id: number) {
    return this.roleRepo.findOneBy({ id });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    await this.roleRepo.update({ id }, updateRoleDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.roleRepo.delete({ id });
    return {
      message: 'successfully removed',
    };
  }
}
