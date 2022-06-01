import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';
export declare class FoodsService {
    private foodRepository;
    constructor(foodRepository: Repository<Food>);
    create(createFoodDto: CreateFoodDto): Promise<CreateFoodDto & Food>;
    findAll(): Promise<Food[]>;
    findOne(id: number): Promise<Food>;
    update(id: number, updateFoodDto: UpdateFoodDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
