import { Ingridients } from './../entities/ingridients.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class IngredientsService extends TypeOrmCrudService<{Ingridients}> {
    constructor(@InjectRepository(Ingridients) repo) {
        super(repo);
    }
}
