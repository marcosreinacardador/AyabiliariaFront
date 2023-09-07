import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/modules/cliente';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';

import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-listados-cliente',
  templateUrl: './listados-cliente.component.html',
  styleUrls: ['./listados-cliente.component.css']
})

export class ListadosClienteComponent implements OnInit{

    displayedColumns: string[] = ['dni', 'nombre', 'telefonoContacto', 'correoElectronico', 'datosBancarios'];
    dataSource: MatTableDataSource<Cliente> = new MatTableDataSource<Cliente>; // Usa MatTableDataSource para los datos

    lista_clientes = Array<Cliente>();
    
    totalRegistros: number = 0;
    totalPorPagina: number = 5;
    opcionesTamanio: number[] = [5, 10, 15, 20, 100];
    paginaActual: number = 0;

  constructor(private ayabiliariaService: AyabiliariaService, private dialog: MatDialog, private router: Router) {
      this.dataSource = new MatTableDataSource<Cliente>();
  }

  // listado de clientes paginada
  ngOnInit(): void {
    this.getClientesPorPaginas();
    this.obtenerClientes();
    this.actualizaVista();
    
  }
  actualizaVista(){
    this.dataSource.data = this.lista_clientes;
  }

  // element binding de paginator
  paginar(evento: PageEvent) {
    console.log('evento paginator');
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina = evento.pageSize;
    this.getClientesPorPaginas();  //llamamos y mete la lista de lcientes actualizada con los parametros 
  }

  obtenerClientes(): void {
    this.ayabiliariaService.getClientes().subscribe(clientes => {
    this.actualizaVista(); // Asigna los datos al dataSource
  });
  }

  getClientesPorPaginas(){
    this.ayabiliariaService.getClientesPorPaginas(this.paginaActual, this.totalPorPagina).subscribe({
      complete: () => console.log('Comunicación completada'),
      error: (errorRx) =>  console.error(errorRx),
      next: (pagina) =>{
        // hago el casting
        this.lista_clientes= <Array<Cliente>> pagina.content;  //para acceder al primero por ejemplo pagina.content[0].dni;
        this.totalRegistros = pagina.totalElements;
        // Actualiza el dataSource con los nuevos datos
        this.actualizaVista();
      }
    });
  }

  nuevoCliente(){
    this.router.navigate(['/altas']);
  }
} 

