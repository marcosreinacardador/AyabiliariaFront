import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modules/cliente';
import { Propiedad } from 'src/app/modules/propiedad';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';

@Component({
  selector: 'app-listados-pro',
  templateUrl: './listados-pro.component.html',
  styleUrls: ['./listados-pro.component.css']
})
export class ListadosProComponent implements OnInit {
  
  displayedColumns: string[] = ['numeroReferencia', 
                                'tipoPropiedad',
                                'operacion',
                                'ubicacion',
                                'total',
                                'descripcion',
                              ];
  dataSource: MatTableDataSource<Propiedad> = new MatTableDataSource<Propiedad>; // Usa MatTableDataSource para los datos
 // dataSourceCli: MatTableDataSource<Cliente> = new MatTableDataSource<Cliente>;
  lista_pro = Array<Propiedad>();
  
  totalRegistros: number = 0;
  totalPorPagina: number = 5;
  opcionesTamanio: number[] = [5, 10, 15, 20, 100];
  paginaActual: number = 0;

constructor(private ayabiliariaService: AyabiliariaService, private dialog: MatDialog, private router: Router) {
    this.dataSource = new MatTableDataSource<Propiedad>();
}

// listado de clientes paginada
ngOnInit(): void {
  this.getPropiedadesPorPagina();
  this.getPropiedades();
  this.actualizaVista();
  
}
actualizaVista(){
  this.dataSource.data = this.lista_pro;
}

// element binding de paginator
paginar(evento: PageEvent) {
  console.log('evento paginator');
  this.paginaActual = evento.pageIndex;
  this.totalPorPagina = evento.pageSize;
  this.getPropiedadesPorPagina();  //llamamos y mete la lista de lcientes actualizada con los parametros 
}

getPropiedades(): void {
  this.ayabiliariaService.getPropiedades().subscribe(propiedad => {
  this.actualizaVista(); // Asigna los datos al dataSource
});
}

getPropiedadesPorPagina(){
  this.ayabiliariaService.getPropiedadesPorPagina(this.paginaActual, this.totalPorPagina).subscribe({
    complete: () => console.log('Comunicación completada'),
    error: (errorRx) =>  console.error(errorRx),
    next: (pagina) =>{
      // hago el casting
      this.lista_pro= <Array<Propiedad>> pagina.content;  //para acceder al primero por ejemplo pagina.content[0].dni;
      this.totalRegistros = pagina.totalElements;
      // Actualiza el dataSource con los nuevos datos
      this.actualizaVista();
    }
  });
}

// nuevoCliente(){
//   this.router.navigate(['/altas']);
// }
} 