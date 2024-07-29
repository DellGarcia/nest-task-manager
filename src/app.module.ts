import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { TaskModule } from './task/task.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Task } from './task/entities/task.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Task],
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
