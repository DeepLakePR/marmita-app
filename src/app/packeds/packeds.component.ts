import { Component, OnDestroy, OnInit } from '@angular/core';
import { PackedsListComponent } from './packeds-list/packeds-list.component';
import { Packed } from './packed.model';
import { CommonModule } from '@angular/common';
import { PackedService } from './packed.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-packeds',
  imports: [
    PackedsListComponent,
    CommonModule,
    RouterModule
  ],
  providers: [
    PackedService
  ],
  templateUrl: './packeds.component.html',
  styleUrl: './packeds.component.css'
})
export class PackedsComponent implements OnInit, OnDestroy {

  selectedPacked!: Packed;
  subscription: Subscription = new Subscription();

  constructor(private packedService: PackedService) {}

  ngOnInit(): void{
    this.subscription = this.packedService.packedSelected.subscribe((selectedPacked: Packed) => {
      this.selectedPacked = selectedPacked;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
