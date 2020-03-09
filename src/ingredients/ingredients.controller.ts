import { Ingridients } from './../entities/ingridients.entity';
import { IngredientsService } from './ingredients.service';
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import {ApiTags} from '@nestjs/swagger';

@Crud({
    model: {
        type: Ingridients,
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        },
    },
})
@Controller('ingredients')
@ApiTags('Ingredients')
export class IngredientsController {
    constructor(public service: IngredientsService) {}
}
