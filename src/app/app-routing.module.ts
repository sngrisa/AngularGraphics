import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './graphics/pages/bars/bars.component';

const routes: Routes = [
  {
    path: 'graphics', loadChildren: () => import('./graphics/graphics.module').then((m) => m.GraphicsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
