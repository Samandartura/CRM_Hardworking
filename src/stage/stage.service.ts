import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Stage } from './entities/stage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StageService {
  constructor(
    @InjectRepository(Stage) private readonly stageRepo: Repository<Stage>
  ){}
  create(createStageDto: CreateStageDto) {
    const { name} = createStageDto
    return this.stageRepo.save({name})
  }

  findAll() {
    return this.stageRepo.find({
      relations: {
        lids: true,
        groups: true,
      },
    });
  }

  findOne(id: number) {
    return this.stageRepo.findOneBy({id})
  }

  update(id: number, updateStageDto: UpdateStageDto) {
    return this.stageRepo.update({id}, updateStageDto )
  }

  remove(id: number) {
    return this.stageRepo.delete({id})
  }
}
