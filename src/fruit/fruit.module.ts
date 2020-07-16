import { Module } from '@nestjs/common'
import { FruitService } from './fruit.service'
import { FruitController } from './fruit.controller'
import { FruitValidationService } from './fruit.validation.service'

@Module({
  providers: [FruitService, FruitValidationService],
  controllers: [FruitController],
  exports: [FruitService, FruitValidationService]
})

export class FruitModule { }
