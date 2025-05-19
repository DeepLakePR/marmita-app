import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { DropdownDirective } from "../shared/dropdown.directive";
import { RouterModule } from "@angular/router";

@Component({
    imports: [
        CommonModule,
        DropdownDirective,
        RouterModule,
    ],
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css'
})

export class HeaderComponent {
    
    @Output() featureSelected = new EventEmitter<string>();
    localFeatureSelected = 'packeds';

    onSelect(feature: string){
        this.featureSelected.emit(feature);
        this.localFeatureSelected = feature;

    }

}
