import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dtos/update.todo.dto';
import { CreateTodoDto } from './dtos/create.todo.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ITodo } from './interfaces/todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(): Promise<ITodo[]> {
    return await this.todoService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<ITodo> {
    return await this.todoService.getOne(id);
  }

  @Post()
  async create(@Body() todoDto: CreateTodoDto): Promise<ITodo> {
    return await this.todoService.create(todoDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todoDto: UpdateTodoDto,
  ): Promise<ITodo> {
    return await this.todoService.update(id, todoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ITodo> {
    return await this.todoService.delete(id);
  }
}
