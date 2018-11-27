import { AuthModule } from './../auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { TaskResolvers } from './task.resolvers';
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Task]),
  ],
  providers: [
    TaskService,
    TaskResolvers,
  ],
})
export class TaskModule {}