import { Injectable } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './entities/branch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch) private readonly branchRepo: Repository<Branch>,
  ) {}

  async create(createBranchDto: CreateBranchDto) {
    return this.branchRepo.save(createBranchDto)
  }

  async findAll() {
    return this.branchRepo.find({ relations: { groups: true } })
  }

  async findOne(id: number) {
    return this.branchRepo.findOneBy({ id })
  }

  async update(id: number, updateBranchDto: UpdateBranchDto) {
    await this.branchRepo.update({ id }, updateBranchDto)
    return await this.findOne(id)
  }

  async remove(id: number) {
    await this.branchRepo.delete({ id })
    return {
      message: "successfully removed"
    }
  }
}
