import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
