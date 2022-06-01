import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodsController {
    private readonly foodsService;
    constructor(foodsService: FoodsService);
    create(createFoodDto: CreateFoodDto): Promise<CreateFoodDto & import("./entities/food.entity").Food>;
    findAll(): Promise<import("./entities/food.entity").Food[]>;
    findOne(id: string): Promise<import("./entities/food.entity").Food>;
    update(id: string, updateFoodDto: UpdateFoodDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
