import { Ingridients } from './ingridients.entity';
import { Module } from '@nestjs/common';
import {Product} from './Product.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

export const entities = [Product, Ingridients];

@Module({
    imports: [TypeOrmModule.forFeature(entities)],
    exports: [TypeOrmModule.forFeature(entities)],
})
export  class EntitiesModule {}
