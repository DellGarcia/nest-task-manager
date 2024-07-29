import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    return this.taskRepository.save(task);
  }

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({ id });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOneBy({ id });

    if(!task) {
      throw new HttpException('Task Not Found', 404);
    }

    return this.taskRepository.save({id, updateTaskDto});
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
