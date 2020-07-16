/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common'
import { Fruit } from './fruit.model'
import { samplefruit } from './fruits.seed'
import { FruitService } from './fruit.service'

import { notArraysEqual } from '../utils/tsUtils'


@Injectable()
export class FruitValidationService {

    constructor(private service: FruitService) { }

    // Validators 
    validateFruitExistsByName(f: Fruit) {
        const fruitExists = this.service.findFruitByName(f.name)

        if (fruitExists) {
            throw new BadRequestException("Hmm We already have that fruit we dont seem to need it.")
        }
    }

    validateFruit(f: Fruit) {
        if (notArraysEqual(Object.keys(f), Object.keys(samplefruit))) {

            const str = Object.keys(samplefruit).reduce((p, c) => {
                return p + ", " + c
            })

            throw new BadRequestException(`Fruit is mising properties. Fruits should all have ${str} properties`)
        }
    }

    // validateFruitVariety(f: FruitVariety) {
    //     if (notArraysEqual(Object.keys(f), Object.keys(samplefruitvariety))) {
    //         throw new BadRequestException("FruitVariety dont have all details.")
    //     }
    // }

    validateWeHaveFruit(id: string) {
        if (!this.service.exists(id)) {
            throw new NotFoundException("Hmm We don't have that fruit yet.")
        }
    }
}