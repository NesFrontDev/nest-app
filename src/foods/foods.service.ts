import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodsService {

  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,
  ) {}

  create(createFoodDto: CreateFoodDto) {
    return this.foodRepository.save(createFoodDto);
  }

  findAll() {
    return this.foodRepository.find();
  }

  findOne(id: number) {
    return this.foodRepository.findOne(id);
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return this.foodRepository.update(id,updateFoodDto);
  }

  remove(id: number) {
    return this.foodRepository.delete(id);
  }
}
