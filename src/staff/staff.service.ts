import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleService } from '../role/role.service';
import { AddRoleDto } from './dto/addRole.dto';
import { ActivateStuffDto } from './dto/activate.dto';
import { Stuff } from './entities/staff.entity';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StuffService {
  constructor(
    @InjectRepository(Stuff) private readonly stuffRepo: Repository<Stuff>,
    private readonly roleService: RoleService,
  ) {}

  async create(createStuffDto: CreateStaffDto) {
    const newStuff = await this.stuffRepo.save(createStuffDto);
    const role = await this.roleService.getRoleByName('stuff');
    if (!role) {
      throw new BadRequestException('Role not found');
    }

    newStuff.roles = [role];

    return newStuff;
  }

  async findAll() {
    return this.stuffRepo.find({ relations: { roles: true } });
  }

  async getStuffByLogin(login: string) {
    return this.stuffRepo.findOne({ where: { login } });
  }

  async findOne(id: number) {
    return this.stuffRepo.findOneBy({ id });
  }

  async update(id: number, updateStuffDto: UpdateStaffDto) {
    await this.stuffRepo.update({ id }, updateStuffDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.stuffRepo.delete({ id });
    return {
      message: 'successfully removed',
    };
  }

  async addRole(addRoleDto: AddRoleDto) {
    const stuff = await this.stuffRepo.findOne({
      where: { id: addRoleDto.stuffId },
    });
    const role = await this.roleService.getRoleByName(addRoleDto.name);

    if (role && stuff) {
      stuff.roles.push(role);
      await this.stuffRepo.save(stuff);

      const updatedStuff = await this.stuffRepo.findOne({
        where: { id: addRoleDto.stuffId },
        relations: ['roles'],
      });

      return updatedStuff;
    }

    throw new NotFoundException('Stuff or role not found');
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const stuff = await this.stuffRepo.findOne({
      where: { id: addRoleDto.stuffId },
    });
    const role = await this.roleService.getRoleByName(addRoleDto.name);

    if (role && stuff) {
      stuff.roles = stuff.roles.filter((stuffRole) => stuffRole.id !== role.id);
      await this.stuffRepo.save(stuff);

      const updatedstuff = await this.stuffRepo.findOne({
        where: { id: addRoleDto.stuffId },
        relations: ['roles'],
      });

      return updatedstuff;
    }

    throw new NotFoundException('stuff or role not found');
  }

  async activateStuff(activateStuffDto: ActivateStuffDto) {
    const stuff = await this.stuffRepo.findOne({
      where: { id: activateStuffDto.stuffId },
    });

    if (stuff) {
      stuff.is_active = !stuff.is_active; 

      await this.stuffRepo.save(stuff); 

      return stuff;
    }

    throw new NotFoundException('stuff not found');
  }
}

