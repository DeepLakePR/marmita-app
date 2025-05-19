import { Component, Input } from '@angular/core';
import { Packed } from '../packed.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { FoodListService } from '../../food-list/food-list.service';
import { PackedService } from '../packed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packeds-details',
  imports: [
    DropdownDirective,
    CommonModule
  ],
  templateUrl: './packeds-details.component.html',
  styleUrl: './packeds-details.component.css'
})
export class PackedsDetailsComponent {

  @Input() packedSelected!: Packed;

  constructor(private packedService: PackedService, private router: Router) {}

  addToFoodList() {
    this.packedService.addIngredientsToFoodList(this.packedSelected.ingredients);

    this.router.navigate(['/food']);

  }

}
