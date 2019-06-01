import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
@Module({
  imports: [UsersController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
