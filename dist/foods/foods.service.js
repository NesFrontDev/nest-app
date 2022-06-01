"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_entity_1 = require("./entities/food.entity");
const typeorm_2 = require("typeorm");
let FoodsService = class FoodsService {
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    create(createFoodDto) {
        return this.foodRepository.save(createFoodDto);
    }
    findAll() {
        return this.foodRepository.find();
    }
    findOne(id) {
        return this.foodRepository.findOne(id);
    }
    update(id, updateFoodDto) {
        return this.foodRepository.update(id, updateFoodDto);
    }
    remove(id) {
        return this.foodRepository.delete(id);
    }
};
FoodsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(food_entity_1.Food)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FoodsService);
exports.FoodsService = FoodsService;
//# sourceMappingURL=foods.service.js.map