import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PackedsComponent } from './packeds/packeds.component';
import { PackedsListComponent } from './packeds/packeds-list/packeds-list.component';
import { PackedsDetailsComponent } from './packeds/packeds-details/packeds-details.component';
import { PackedsItemComponent } from './packeds/packeds-list/packeds-item/packeds-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    PackedsComponent,
    PackedsListComponent,
    PackedsDetailsComponent,
    PackedsItemComponent,
    FoodListComponent,
    FoodEditComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
