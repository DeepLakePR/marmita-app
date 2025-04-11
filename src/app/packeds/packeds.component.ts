import { Component } from '@angular/core';
import { PackedsDetailsComponent } from "./packeds-details/packeds-details.component";
import { PackedsListComponent } from './packeds-list/packeds-list.component';
import { Packed } from './packed.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packeds',
  imports: [
    PackedsListComponent,
    PackedsDetailsComponent,
    CommonModule
  ],
  templateUrl: './packeds.component.html',
  styleUrl: './packeds.component.css'
})
export class PackedsComponent {

  selectedPacked!: Packed;

}
