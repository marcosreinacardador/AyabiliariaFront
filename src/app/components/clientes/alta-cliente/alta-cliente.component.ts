import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})

export class AltaClienteComponent implements OnInit {
 
  cliente: Cliente;
  camposLlenos: boolean = false;
  deshabilitaGuardar: boolean = false;
  @ViewChild('dniInput', { static: false }) dniInput!: ElementRef;
  clienteGuardado: Cliente | null = null;
  clienteGuardadoExitosamente: boolean = false; // Bandera para indicar que el cliente se guardó

  constructor( private ayabiliariaService: AyabiliariaService, private servicioRutas: Router) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {}

  guardarCliente() {
    this.ayabiliariaService.postAltaClienteService(this.cliente).subscribe({
      complete: () => console.log(`com completa`),
      error: (errorRx) => {
        console.error(errorRx);
        alert(`Error al insertar un cliente`);
      },
      next:  clienteNuevo => {
       this.clienteGuardado = clienteNuevo;
       this.clienteGuardadoExitosamente = true; // Cliente guardado con éxito
        alert(`Cliente insertado correctamente`);
        this.camposLlenos = true; // Marcar todos los campos como llenos
        this.deshabilitaGuardar = true;
       
      },
    });
  }

  clienteIsEmpty(): boolean {
    // Verifica si alguna propiedad del cliente está vacía
    return !this.cliente 
          || !this.cliente.dni 
          || !this.cliente.nombre
          || !this.cliente.apellidos 
          || !this.cliente.telefonoContacto
          || !this.cliente.correoElectronico
          || !this.cliente.datosBancarios;
  }


  crearPropiedad(){
    if (this.clienteGuardado) {
      this.servicioRutas.navigate(['/alta-pro'], {
        queryParams: { dniCliente: this.clienteGuardado.dni } // Pasar el DNI del cliente como parámetro de ruta
      });
    // Redirige a la ruta donde se crea una propiedad
    //this.servicioRutas.navigate(['/alta-pro'], { queryParams: { clienteId: this.cliente.dni } });
    }
  }

  salir(){
    this.servicioRutas.navigate(['/']);
  }

  limpiarCampos(){
    this.cliente = new Cliente(); // Reiniciar el cliente
    this.dniInput.nativeElement.focus(); // Establecer el foco en el campo DNI
  }

}


  

