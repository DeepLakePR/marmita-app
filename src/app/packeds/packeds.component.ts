import { Component } from '@angular/core';
import { PackedsDetailsComponent } from "./packeds-details/packeds-details.component";
import { PackedsListComponent } from './packeds-list/packeds-list.component';

@Component({
  selector: 'app-packeds',
  imports: [
    PackedsListComponent,
    PackedsDetailsComponent
  ],
  templateUrl: './packeds.component.html',
  styleUrl: './packeds.component.css'
})
export class PackedsComponent {

}
