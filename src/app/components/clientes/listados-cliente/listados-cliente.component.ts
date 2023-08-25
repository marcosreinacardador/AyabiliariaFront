import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';

import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AltaClienteComponent } from '../alta-cliente/alta-cliente.component';



@Component({
  selector: 'app-listados-cliente',
  templateUrl: './listados-cliente.component.html',
  styleUrls: ['./listados-cliente.component.css']
})

export class ListadosClienteComponent implements OnInit{

  displayedColumns: string[] = ['dni', 'nombre', 'telefonoContacto', 'correoElectronico', 'datosBancarios', 'accion'];
  dataSource: MatTableDataSource<Cliente>; // Usa MatTableDataSource para los datos

  lista_clientes = Array<Cliente>();
  
  totalRegistros: number = 0;
  totalPorPagina: number = 10;
  opcionesTamanio: number[] = [10, 20, 30, 1000];
  paginaActual: number = 0;
  dialog: any;

  constructor(private ayabiliariaService: AyabiliariaService, private servicioRutas: Router) {
    this.lista_clientes = new Array<Cliente>();
    this.dataSource = new MatTableDataSource<Cliente>();
  }

  // listado de clientes paginada
  ngOnInit(): void {
    this.obtenerClientes();
    this.getClientesPorPaginas();
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
      this.dataSource.data = clientes; // Asigna los datos al dataSource
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
       }

   });
 }

 abrirFormularioAltaCliente(): void {
  // Abre el formulario para añadir un nuevo cliente
  const dialogRef = this.dialog.open(AltaClienteComponent, {
    width: '400px', // Ajusta el ancho según tus necesidades
    data: {} // Puedes pasar datos al formulario si es necesario
  });

  dialogRef.afterClosed().subscribe(result => {
    // Aquí puedes manejar el resultado del formulario
    if (result) {
      console.log('Cliente añadido:', result);
    }
  });
}

  modificarCliente(cliente: Cliente): void {
    // Implementa la lógica para modificar el cliente aquí
    console.log('Modificando al cliente:', cliente);
  }

}

