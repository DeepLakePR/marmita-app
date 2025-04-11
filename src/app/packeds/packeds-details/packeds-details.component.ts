import { Component, Input } from '@angular/core';
import { Packed } from '../packed.model';

@Component({
  selector: 'app-packeds-details',
  imports: [],
  templateUrl: './packeds-details.component.html',
  styleUrl: './packeds-details.component.css'
})
export class PackedsDetailsComponent {

  @Input() packedSelected!: Packed;

}
