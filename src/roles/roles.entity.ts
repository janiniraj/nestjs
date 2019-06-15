import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    name:string;

    @Column({default:1}) 
    isActive:boolean;
}