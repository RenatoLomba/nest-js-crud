import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://renatoadmin:YhyDBsOD1kXtWC28@cluster0-shard-00-00.r83ng.mongodb.net:27017,cluster0-shard-00-01.r83ng.mongodb.net:27017,cluster0-shard-00-02.r83ng.mongodb.net:27017/nestdb?ssl=true&replicaSet=atlas-14om4u-shard-0&authSource=admin&retryWrites=true&w=majority',
      // 'mongodb+srv://renatoadmin:YhyDBsOD1kXtWC28@cluster0.r83ng.mongodb.net/nestdb?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { } // eslint-disable-line
