import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AltaClienteComponent } from './components/clientes/alta-cliente/alta-cliente.component';
import { ModificarClienteComponent } from './components/clientes/modificar-cliente/modificar-cliente.component';
import { ListadosClienteComponent } from './components/clientes/listados-cliente/listados-cliente.component';
import { ConsultasClienteComponent } from './components/clientes/consultas-cliente/consultas-cliente.component';

import { AltaProComponent } from './components/propiedades/alta-pro/alta-pro.component';
import { ModificarProComponent } from './components/propiedades/modificar-pro/modificar-pro.component';
import { ListadosProComponent } from './components/propiedades/listados-pro/listados-pro.component';
import { ConsultasProComponent } from './components/propiedades/consultas-pro/consultas-pro.component';


const routes: Routes = [

  {path:"altas", component: AltaClienteComponent},
  {path:"modificar", component: ModificarClienteComponent},
  {path:"listados", component: ListadosClienteComponent},
  {path:"consultar", component: ConsultasClienteComponent},
  {path:"alta-pro", component: AltaProComponent},
  {path:"modificar", component: ModificarProComponent},
  {path:"listados", component: ListadosProComponent},
  {path:"consultar", component: ConsultasProComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
