import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Food } from '../../shared/food.model';

@Component({
  selector: 'app-food-edit',
  imports: [],
  templateUrl: './food-edit.component.html',
  styleUrl: './food-edit.component.css'
})

export class FoodEditComponent {

  @ViewChild("nameInput") nameInputRef!: ElementRef;
  @ViewChild("amountInput") amountInputRef!: ElementRef;

  @Output() foodAdded = new EventEmitter<Food>();

  addFood() {
    const foodName = this.nameInputRef.nativeElement.value;
    const foodAmount = this.amountInputRef.nativeElement.value;

    const newFood = new Food(
      foodName,
      foodAmount
    )

    this.foodAdded.emit(newFood);

  }

}
