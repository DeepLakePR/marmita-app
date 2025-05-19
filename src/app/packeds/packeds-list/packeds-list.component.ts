import { Component } from '@angular/core';
import { PackedsItemComponent } from "./packeds-item/packeds-item.component";
import { Packed } from '../packed.model';
import { CommonModule } from '@angular/common';
import { PackedService } from '../packed.service';

@Component({
  selector: 'app-packeds-list',
  imports: [
    PackedsItemComponent,
    CommonModule
  ],
  templateUrl: './packeds-list.component.html',
  styleUrl: './packeds-list.component.css'
})
export class PackedsListComponent {

  packeds?: Packed[];

  constructor(private packedService: PackedService) {}

  ngOnInit(): void{
    this.packeds = this.packedService.getPackeds();
  }

}
