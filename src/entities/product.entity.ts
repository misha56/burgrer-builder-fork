import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import {CrudValidationGroups} from '@nestjsx/crud';
import {IsDefined, IsOptional, IsString, Length} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { Ingridients } from './ingridients.entity';
const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @Length(1, 50)
    @Column('varchar', { length: 50 })
    name: string;

    @ApiProperty()
    @IsOptional({ groups: [UPDATE] })
    @IsDefined({ groups: [CREATE] })
    @Column({ type: 'double' })
    price: number;

    @ApiProperty()
    @IsOptional({ groups: [CREATE] })
    @OneToOne(type => Ingridients)
    @JoinColumn()
    ingridients: Ingridients;
}
