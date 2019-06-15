import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {

    constructor(@InjectRepository(Role) private rolesRepository: Repository<Role>) 
    { 

    }

    async createRole(role:Role) {
        this.rolesRepository.save(role)
    }

    async getRoles(role: Role): Promise<Role[]> {
        return await this.rolesRepository.find();
    }

    async getRole(_id: number): Promise<Role[]> {
        return await this.rolesRepository.find({
            select: ["name", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async updateRole(role: Role) {
        this.rolesRepository.save(role)
    }

    async deleteRole(role: Role) {
        this.rolesRepository.delete(role);
    }

    async getAllRoles(){
        return await this.rolesRepository.find();
    }
}
