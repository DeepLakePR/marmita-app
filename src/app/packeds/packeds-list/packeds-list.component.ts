import { Component } from '@angular/core';
import { PackedsItemComponent } from "./packeds-item/packeds-item.component";
import { Packed } from './packed.model';
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
    new Packed('Churrasco', 'Churrasco com pão de alho', 'https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),
    new Packed('Churrasco', 'Churrasco com pão de alho', 'https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),
    new Packed('Churrasco', 'Churrasco com pão de alho', 'https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),
    new Packed('Churrasco', 'Churrasco com pão de alho', 'https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),
  ];



}
