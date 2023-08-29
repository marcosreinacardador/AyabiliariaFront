import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})

export class AltaClienteComponent implements OnInit {
 
   cliente: Cliente ;

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
        alert(
          `Cliente insertado correctamente`
        );
        // tras el post exitoso redirigo al usuario al listado
        this.servicioRutas.navigate(['/']);
      },
    });
  }
  }
  

