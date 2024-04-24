import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidModule } from './lid/lid.module';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { Lid } from './lid/entities/lid.entity';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { GroupModule } from './group/group.module';
import { BranchModule } from './branch/branch.module';
import { Role } from './role/entities/role.entity';
import { Group } from './group/entities/group.entity';
import { Branch } from './branch/entities/branch.entity';
import { StuffRole } from './role/entities/stuffRole.entity';
import { Target } from './target/entities/target.entity';
import { Stuff } from './staff/entities/staff.entity';
import { GroupStuff } from './staff/entities/groupStuff.dto';
import { TargetModule } from './target/target.module';
import { StuffModule } from './staff/staff.module';
import { StudentsModule } from './students/students.module';
import { StudentGroupModule } from './student_group/student_group.module';
import { LessonModule } from './lesson/lesson.module';
import { StudentLessonModule } from './student_lesson/student_lesson.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5432',
      database: 'hardworking',
      entities: [
        Stage,
        Lid,
        LidStatus,
        Target,
        ReasonLid,
        Stuff,
        Role,
        Group,
        Branch,
        StuffRole,
        GroupStuff,
      ],
      synchronize: true,
    }),
    AuthModule,
    StageModule,
    LidStatusModule,
    TargetModule,
    LidModule,
    ReasonLidModule,
    StuffModule,
    RoleModule,
    GroupModule,
    BranchModule,
    StudentsModule,
    StudentGroupModule,
    LessonModule,
    StudentLessonModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 