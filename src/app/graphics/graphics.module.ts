import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';
import { GraphicBarComponent } from './pages/graphic-bar/graphic-bar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { GraphicsServiceService } from './services/graphics-service.service';
import { MenuItemComponent } from './shared/menu/menu-item/menu-item.component';
import { RouterModule } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BarsComponent } from "./pages/bars/bars.component";


@NgModule({
  declarations: [
    DoubleBarsComponent,
    BarsComponent,
    DonutsComponent,
    DonutsHttpComponent,
    GraphicBarComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    RouterModule,
    BarsComponent
],
  providers: [
    GraphicsServiceService,
    provideCharts(withDefaultRegisterables()),
  ],
  exports: [
    DoubleBarsComponent,
    DonutsComponent,
    DonutsHttpComponent,
    GraphicBarComponent,
    MenuComponent,
    MenuItemComponent,
    BarsComponent
  ]
})
export class GraphicsModule { }
