import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Packed } from '../../packed.model';

@Component({
  selector: 'app-packeds-item',
  imports: [],
  templateUrl: './packeds-item.component.html',
  styleUrl: './packeds-item.component.css'
})
export class PackedsItemComponent {

  @Input() packed!: Packed;
  @Output() packedSelected = new EventEmitter<void>();

  onSelected(){
    this.packedSelected.emit();

  }

}
