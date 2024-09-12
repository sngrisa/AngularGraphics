import { Component } from '@angular/core';
import { IMenu } from '../interfaces/iMenu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuItems: IMenu[] = [
    {
      id: 1,
      title: "Bars",
      url: "/graphics/bars",
      icon: "bi bi-bar-chart-steps"
    },
    {
      id: 2,
      title: "Double Bars",
      url: "/graphics/doublebars",
      icon: "bi bi-bar-chart-fill"
    },
    {
      id: 3,
      title: "Donuts Http",
      url: "/graphics/donutshttp",
      icon: "bi bi-file-bar-graph"
    },
    {
      id: 4,
      title: "Donuts",
      url: "/graphics/donuts",
      icon: "bi bi-filter-circle"
    },
    {
      id: 5,
      title: "Graphic Bar",
      url: "/graphics/graphicbar",
      icon: "bi bi-slash-circle"
    },
  ];

  

}
