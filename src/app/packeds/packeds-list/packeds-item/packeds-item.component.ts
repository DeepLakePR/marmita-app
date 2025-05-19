import { Component, Input,  } from '@angular/core';
import { Packed } from '../../packed.model';
import { PackedService } from '../../packed.service';

@Component({
  selector: 'app-packeds-item',
  imports: [],
  templateUrl: './packeds-item.component.html',
  styleUrl: './packeds-item.component.css'
})
export class PackedsItemComponent {

  @Input() packed!: Packed;

  constructor(private packedService: PackedService) {}

  onSelected(){
    this.packedService.packedSelected.emit(this.packed);
  }

}
