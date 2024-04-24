import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private readonly lessonRepo:Repository<Lesson>
  ){}
  create(createLessonDto: CreateLessonDto) {
    return this.lessonRepo.save(createLessonDto)
  }

  findAll() {
    return this.lessonRepo.find()
  }

  findOne(id: number) {
    return this.lessonRepo.findOneBy({id})
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.lessonRepo.update({id}, updateLessonDto)
  }

  remove(id: number) {
    return this.lessonRepo.delete({id})
  }
}
