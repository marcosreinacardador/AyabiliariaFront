import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AltaClienteComponent } from './components/clientes/alta-cliente/alta-cliente.component';
import { ModificarClienteComponent } from './components/clientes/modificar-cliente/modificar-cliente.component';
import { ListadosClienteComponent } from './components/clientes/listados-cliente/listados-cliente.component';
import { ConsultasClienteComponent } from './components/clientes/consultas-cliente/consultas-cliente.component';

import { AltaProComponent } from './components/propiedades/alta-pro/alta-pro.component';
import { ModificarProComponent } from './components/propiedades/modificar-pro/modificar-pro.component';
import { ListadosProComponent } from './components/propiedades/listados-pro/listados-pro.component';
import { ConsultasProComponent } from './components/propiedades/consultas-pro/consultas-pro.component';





@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ModificarClienteComponent,
    ListadosClienteComponent,
    ConsultasClienteComponent,
    AltaProComponent,
    ModificarProComponent,
    ListadosProComponent,
    ConsultasProComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
