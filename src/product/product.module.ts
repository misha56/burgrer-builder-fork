import { Module } from '@nestjs/common';
import { ProductController } from './Product.controller';
import { ProductService } from './Product.service';
import {EntitiesModule} from '../entities/entities.module';

@Module({
  imports: [EntitiesModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
