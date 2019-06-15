import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './roles.entity';

@Controller('roles')
export class RolesController {
    constructor(private service: RolesService) { }

    @Get('')
    getAllRoles() {
        return this.service.getAllRoles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRole(params.id);
    }

    @Post()
    create(@Body() role: Role) {
        return this.service.createRole(role);
    }

    @Put()
    update(@Body() role: Role) {
        return this.service.updateRole(role);
    }

    @Delete(':id')
    deleteRole(@Param() params) {
        return this.service.deleteRole(params.id);
    }
}
