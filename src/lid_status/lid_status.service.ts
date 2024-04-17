import { Injectable } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStatusService {
  constructor(
    @InjectRepository(LidStatus) private readonly lidstatusRepo: Repository<LidStatus>
  ){}
  create(createLidStatusDto: CreateLidStatusDto) {
    const {status} = createLidStatusDto
    return this.lidstatusRepo.save({status});
  }

  findAll() {
    return this.lidstatusRepo.find();
  }

  findOne(id: number) {
    return this.lidstatusRepo.findOneBy({id});
  }

  update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return this.lidstatusRepo.update({id}, updateLidStatusDto );
  }

  remove(id: number) {
    return this.lidstatusRepo.delete({id});
  }
}
