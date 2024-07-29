import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
  
  status: string;

  createdAt: Date;

  deadline: Date;
}
