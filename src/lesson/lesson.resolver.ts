import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Resolver('Lesson')
export class LessonResolver {
  constructor(private readonly lessonService: LessonService) {}

  @Mutation(() => Lesson)
  async createLesson(@Args('createLesson') createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  @Query(() => [Lesson])
  async findAllLessons() {
    return this.lessonService.findAll();
  }

  @Query(() => Lesson)
  async findLessonById(@Args('id') id: string) {
    return this.lessonService.findOne(+id);
  }

  @Mutation(() => Lesson)
  async updateLesson(
    @Args('id') id: string,
    @Args('updateLesson') updateLessonDto: UpdateLessonDto,
  ) {
    return this.lessonService.update(+id, updateLessonDto);
  }

  @Mutation(() => Lesson)
  async removeLesson(@Args('id') id: string) {
    return this.lessonService.remove(+id);
  }
}
