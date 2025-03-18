import { Component } from '@angular/core';
import { FoodEditComponent } from "./food-edit/food-edit.component";

@Component({
  selector: 'app-food-list',
  imports: [FoodEditComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

}
