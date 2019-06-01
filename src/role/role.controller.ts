import { Controller, Get } from '@nestjs/common';

@Controller('role')
export class RoleController {

    @Get()
  findAll() {
    return `This action returns all rolesssss.....ppp`;
  }

}
