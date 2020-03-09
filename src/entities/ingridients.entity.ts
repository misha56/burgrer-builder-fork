import {Entity, PrimaryGeneratedColumn, Column, Generated, PrimaryColumn, OneToOne} from 'typeorm';
import {CrudValidationGroups} from '@nestjsx/crud';
import { IsDefined, IsOptional, IsNumber, IsString } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger/dist/decorators/api-property.decorator';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Ingridients {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @IsNumber()
    @Column()
    salad: number;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @IsNumber()
    @Column()
    bacon: number;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @IsNumber()
    @Column()
    cheese: number;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @IsNumber()
    @Column()
    meat: number;
}
