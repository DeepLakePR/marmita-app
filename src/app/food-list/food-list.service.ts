import { EventEmitter } from "@angular/core";
import { Food } from "../shared/food.model";

export class FoodListService {

    foodsChanged = new EventEmitter<Food[]>();

    private foodList: Food[] = [
        new Food('Carne', 1),
        new Food('Arroz', 2),
        new Food('Couve Refogada', 2)
    ]

    getFoods() {
        return this.foodList.slice();
    }

    addFood(food: Food){
        this.foodList.push(food);
        this.foodsChanged.emit(this.foodList.slice());
    }

    addIngredients(ingredients: Food[]) {
        this.foodList.push(...ingredients);
        this.foodsChanged.emit(this.foodList.slice());
    }

}
