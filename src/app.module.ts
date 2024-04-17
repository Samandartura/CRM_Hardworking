import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidModule } from './lid/lid.module';
import { Lid } from './lid/entities/lid.entity';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { StageModule } from './stage/stage.module';
import { Stage } from './stage/entities/stage.entity';
import { TargetModule } from './target/target.module';
import { Target } from './target/entities/target.entity';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'microtest',
      entities: [Lid,LidStatus,Stage,Target,ReasonLid],
      synchronize: true,
    }),
    LidModule,
    LidStatusModule,
    StageModule,
    TargetModule,
    ReasonLidModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 