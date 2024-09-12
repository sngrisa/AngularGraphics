import { Component, Input } from '@angular/core';
import { IMenu } from '../../interfaces/iMenu.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  @Input() itemMenu!: IMenu;

}
