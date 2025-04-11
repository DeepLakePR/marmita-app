import { Component, EventEmitter, Output } from '@angular/core';
import { PackedsItemComponent } from "./packeds-item/packeds-item.component";
import { Packed } from '../packed.model';
import { CommonModule } from '@angular/common';

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

  packeds: Packed[] = [
    new Packed('Churrasco', 'Churrasco com pão de alho', 'https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),
    new Packed('Arroz com Frango', 'Uma mistura de arroz com frango', 'https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/07/topo-arroz-com-acafrao-e-frango.jpg'),
    new Packed('Tilapia', 'Minim minim eiusmod non irure labore ullamco.', 'https://churrasco.coz.br/wp-content/uploads/2021/01/file-de-tilapia-churrasqueira-1280x720.jpg'),
    new Packed('Carne Refogada', 'Aliqua nisi officia pariatur duis id proident.', 'https://www.cenariomt.com.br/wp-content/uploads/2022/05/maxresdefault-2022-05-24T074230.584.jpg'),
    new Packed('Salada', 'Anim enim do culpa eiusmod deserunt.', 'https://receitatodahora.com.br/wp-content/uploads/2024/12/salada-tropical-2811-1200x675.jpg'),
  ];

  @Output() packedWasSelected = new EventEmitter<Packed>();

  onPackedSelected(packed: Packed){
    this.packedWasSelected.emit(packed);

  }


}
