import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Todo',
        schema: TodoSchema,
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
