import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentLesson } from './entities/student_lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentLessonService {
  constructor(
    @InjectRepository(StudentLesson) private readonly slessonRepo:Repository<StudentLesson>
  ){}
  create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.slessonRepo.save(createStudentLessonDto)
  }

  findAll() {
    return this.slessonRepo.find()
  }

  findOne(id: number) {
    return this.slessonRepo.findOneBy({id})
  }

  update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.slessonRepo.update({id}, updateStudentLessonDto)
  }

  remove(id: number) {
    return this.slessonRepo.delete({id});
  }
}
