import { Component } from '@angular/core';
import { FoodEditComponent } from "./food-edit/food-edit.component";
import { Food } from '../shared/food.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-list',
  imports: [
    FoodEditComponent,
    CommonModule
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})

export class FoodListComponent {

  foodList: Food[] = [
    new Food('Carne', 1),
    new Food('Arroz', 2),
    new Food('Couve Refogada', 2)
  ];

}
