import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentLessonService } from './student_lesson.service';
import { CreateStudentLessonDto } from './dto/create-student_lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student_lesson.dto';
import { StudentLesson } from './entities/student_lesson.entity';

@Resolver('StudentLesson')
export class StudentLessonResolver {
  constructor(private readonly studentLessonService: StudentLessonService) {}

  @Mutation(() => StudentLesson)
  async createStudentLesson(
    @Args('createStudentLesson') createStudentLessonDto: CreateStudentLessonDto,
  ) {
    return this.studentLessonService.create(createStudentLessonDto);
  }

  @Query(() => [StudentLesson])
  async findAllStudentLessons() {
    return this.studentLessonService.findAll();
  }

  @Query(() => StudentLesson)
  async findStudentLessonById(@Args('id') id: string) {
    return this.studentLessonService.findOne(+id);
  }

  @Mutation(() => StudentLesson)
  async updateStudentLesson(
    @Args('id') id: string,
    @Args('updateStudentLesson') updateStudentLessonDto: UpdateStudentLessonDto,
  ) {
    return this.studentLessonService.update(+id, updateStudentLessonDto);
  }

  @Mutation(() => StudentLesson)
  async removeStudentLesson(@Args('id') id: string) {
    return this.studentLessonService.remove(+id);
  }
}
