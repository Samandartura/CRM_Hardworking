import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entities/role.entity';
import { RoleModule } from '../role/role.module';
import { StuffRole } from '../role/entities/stuffRole.entity';
import { Stuff } from './entities/staff.entity';
import { StuffController } from './staff.controller';
import { StuffService } from './staff.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stuff, StuffRole, Role]),
    RoleModule,
    // forwardRef(() => AuthModule),
  ],
  controllers: [StuffController],
  providers: [StuffService],
  exports: [StuffService],
})
export class StuffModule {}
