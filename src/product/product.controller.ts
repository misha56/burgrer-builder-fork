import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import {ProductService} from './Product.service';
import {Product} from '../entities/Product.entity';
import {ApiTags} from '@nestjs/swagger';

@Crud({
    model: {
        type: Product,
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        },
    },
    query: {
        join: {
            ingridients: {
            }
        }
    }
})
@Controller('Product')
@ApiTags('Product')

export class ProductController {
    constructor(public service: ProductService) {}
}
