import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AltaClienteComponent } from './components/clientes/alta-cliente/alta-cliente.component';
import { ModificarClienteComponent } from './components/clientes/modificar-cliente/modificar-cliente.component';
import { ListadosClienteComponent } from './components/clientes/listados-cliente/listados-cliente.component';
import { ConsultasClienteComponent } from './components/clientes/consultas-cliente/consultas-cliente.component';

import { AltaProComponent } from './components/propiedades/alta-pro/alta-pro.component';
import { ModificarProComponent } from './components/propiedades/modificar-pro/modificar-pro.component';
import { ListadosProComponent } from './components/propiedades/listados-pro/listados-pro.component';
import { ConsultasProComponent } from './components/propiedades/consultas-pro/consultas-pro.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';


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
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSidenavModule,
    RouterModule.forRoot([]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
