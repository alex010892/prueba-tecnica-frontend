import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetalleMisionComponent } from './detalle-mision/detalle-mision.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaCohetesComponent } from './lista-cohetes/lista-cohetes.component';
import { DetalleCoheteComponent } from './detalle-cohete/detalle-cohete.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'detalle-mision/:id', component: DetalleMisionComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'lista-cohetes', component: ListaCohetesComponent },
  { path: 'detalle-cohete/:id', component: DetalleCoheteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
