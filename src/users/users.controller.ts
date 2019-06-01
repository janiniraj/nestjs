import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';
//import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';


@Controller('users')
export class UsersController {
  @Post()
  create() {
    return 'This action adds a new user';
  }

  @Get()
  findAll() {
    return `This action returns all users`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}
