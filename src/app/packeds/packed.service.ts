import { EventEmitter, Injectable } from "@angular/core";
import { Packed } from "./packed.model";
import { Food } from "../shared/food.model";
import { FoodListService } from "../food-list/food-list.service";

@Injectable()
export class PackedService {

    packedSelected = new EventEmitter<Packed>();

    //this.packedSelected.emit();
    //@Output() packedSelected = new EventEmitter<void>();
    
    private packeds: Packed[] = [
        new Packed(
            'Churrasco', 
            'Churrasco com pão de alho', 
            'https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg',
            [
                new Food('Carne', 1),
                new Food('Arroz', 1),
            ]
        ),
        new Packed(
            'Arroz com Frango', 
            'Uma mistura de arroz com frango',
            'https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/07/topo-arroz-com-acafrao-e-frango.jpg',
            [
                new Food('Feijao', 1),
                new Food('Teste', 1),
            ]
        ),
        new Packed('Tilapia',
            'Minim minim eiusmod non irure labore ullamco.',
            'https://churrasco.coz.br/wp-content/uploads/2021/01/file-de-tilapia-churrasqueira-1280x720.jpg',
            [
                new Food('Carne', 1),
                new Food('Arroz', 1),
            ]
        ),
        new Packed('Carne Refogada',
            'Aliqua nisi officia pariatur duis id proident.',
            'https://www.cenariomt.com.br/wp-content/uploads/2022/05/maxresdefault-2022-05-24T074230.584.jpg',
            [
                new Food('Carne', 1),
                new Food('Arroz', 1),
            ]
        ),
        new Packed('Salada',
            'Anim enim do culpa eiusmod deserunt.',
            'https://receitatodahora.com.br/wp-content/uploads/2024/12/salada-tropical-2811-1200x675.jpg',
            [
                new Food('Carne', 1),
                new Food('Arroz', 1),
            ]
        ),
    ];

    constructor(private foodListService: FoodListService) {}

    getPackeds() {
        return this.packeds.slice();
    }

    addIngredientsToFoodList(ingredients: Food[]){
        this.foodListService.addIngredients(ingredients);

    }

}
