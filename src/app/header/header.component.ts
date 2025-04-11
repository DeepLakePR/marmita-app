import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    imports: [
        CommonModule
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
