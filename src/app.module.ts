import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mongodb://localhost/todo')],
  controllers: [],
  providers: [],
})
export class AppModule {}
