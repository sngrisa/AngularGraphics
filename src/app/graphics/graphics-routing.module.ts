import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { GraphicBarComponent } from './pages/graphic-bar/graphic-bar.component';

const routes: Routes = [
  {
    path: '',
    children: [{
        path: 'bars', component: BarsComponent
      },
      {
        path: 'donuts', component: DonutsComponent
      },
      {
        path: 'donutshttp', component: DonutsHttpComponent
      },
      {
        path: 'doublebars', component: DoubleBarsComponent
      },
      {
        path: 'graphicbar', component: GraphicBarComponent
      },
      {
        path: '**', redirectTo: 'bars', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
