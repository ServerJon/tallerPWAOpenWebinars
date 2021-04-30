import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { ListadoComponent } from './views/listado/listado.component';
import { DetalleEntradaComponent } from './views/detalle-entrada/detalle-entrada.component';

const routes: Routes = [
  { path: "listado", component: ListadoComponent },
  { path: "nosotros", component: AcercaDeNosotrosComponent },
  { path: 'detalle-entrada/:id', component: DetalleEntradaComponent},

  { path: '', redirectTo: 'listado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
