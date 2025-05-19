import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodEditComponent } from "./food-edit/food-edit.component";
import { Food } from '../shared/food.model';
import { CommonModule } from '@angular/common';
import { FoodListService } from './food-list.service';

@Component({
  selector: 'app-food-list',
  imports: [
    FoodEditComponent,
    CommonModule
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})

export class FoodListComponent implements OnInit, OnDestroy {

  foodList!: Food[];

  constructor(private foodListService: FoodListService) { }

  ngOnInit() {
    this.foodList = this.foodListService.getFoods();
    console.log('helloworld');
    
    this.foodListService.foodsChanged.subscribe((foods: Food[]) => {
      this.foodList = foods;

    });
  }

  ngOnDestroy() {
    // this.foodListService.foodsChanged.unsubscribe();
  }

}
