import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { Fruit } from './fruit.model'
import { FruitValidationService } from './fruit.validation.service'


@Controller('fruit')
export class FruitController {
    constructor(private service: FruitService,
        private validationService: FruitValidationService,
    ) { }

    // Fruits   
    @Get(':id')
    getFruit(@Param('id') id: string) {
        this.validationService.validateWeHaveFruit(id)

        return this.service.get(id)
    }

    @Get()
    getFruits() {
        return this.service.getAll()
    }



    @Delete(':id')
    removeFruit(@Param('id') id: string) {
        // this.validationService.validateWeHaveFruit(id)
        this.service.remove(id)

        return `Deleted fruit with id ${id}`
    }

    @Patch(':id')
    updateFruit(
        @Param('id') id: string,
        @Body() fruit: Fruit) {
        this.validationService.validateFruit(fruit)
        // How will we update if we don't have that fruit yet
        this.validationService.validateWeHaveFruit(id)
        return this.service.update(id, fruit)
    }

    @Post()
    addFruit(@Body() f: Fruit) {
        // Validate fruit have all properties 
        this.validationService.validateFruit(f)

        return this.service.add(f)
    }
}