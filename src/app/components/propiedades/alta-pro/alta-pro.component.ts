import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propiedad } from 'src/app/modules/propiedad';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';


@Component({
  selector: 'app-alta-pro',
  templateUrl: './alta-pro.component.html',
  styleUrls: ['./alta-pro.component.css']
})
export class AltaProComponent implements OnInit {
  
  propiedad: Propiedad;
  dniCliente: string | null = null;
  //union type es un objeto de dos tipos, tambien se puede any
  foto_seleccionada!: File;  

  mostrarFormulario: boolean = true; // Inicialmente mostramos el formulario
  


  constructor(private ayabiliariaService: AyabiliariaService, private route: ActivatedRoute, private servicioRutas: Router) {
    this.propiedad = new Propiedad(); 
   }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.dniCliente = params['dniCliente'];
    });

    // Verificar si el campo estado está activado y tiene valor 1
    if (this.propiedad.estado === true) {
      console.log('El campo "Activo" está activado y tiene valor true');
      this.propiedad.estado = true;
    } else {
      console.log('El campo "Activo" está desactivado y tiene valor de false');
    }

  }

  guardarPropiedad() {
    if (this.dniCliente !== null) {
      // Crear un objeto cliente con el DNI proporcionado
      const cliente = { dni: this.dniCliente,
       nombre: '', // Puedes dejar estos campos en blanco o proporcionar valores por defecto
       apellidos: '',
       telefonoContacto: '',
       correoElectronico: '',
       datosBancarios: ''
      };
      
      // Asignar el cliente al objeto propiedad
      this.propiedad.cliente = cliente;
      //this.propiedad.cliente.dni = this.dniCliente;
    if(this.foto_seleccionada!=null){
      // llamar a post con foto
      this.ayabiliariaService.postAltaPropiedad(this.propiedad, this.foto_seleccionada).subscribe({
        complete: () => console.log(`com completa`),
        error: (errorRx) => {
          console.error(errorRx);
          alert(`Error al insertar la propiedad con foto`);
        },
        next: propiedadNueva => {
          alert(
            `Propiedada insertada correctamente ${propiedadNueva.numeroReferencia} ${this.foto_seleccionada}`
          );
                  console.log('enviar los datos');
                  console.log(`Propiedad: 
                    ${this.propiedad.numeroReferencia}
                    ${this.propiedad.cliente}
                    ${this.propiedad.direccion}
                    ${this.propiedad.tipoPropiedad}
                    ${this.propiedad.operacion}
                    ${this.propiedad.localidad}
                    ${this.propiedad.poblacion}
                    ${this.propiedad.codigoPostal}
                    ${this.propiedad.total}
                    ${this.propiedad.descripcion}
                    ${this.foto_seleccionada}
                    ${this.propiedad.estado}
                    `); 
             // Preguntar al usuario si desea agregar otra propiedad
            const agregarOtro = confirm('¿Desea agregar otra propiedad para este cliente?');
    
            if (agregarOtro) {
              // Reinicializa el formulario y muestra el formulario nuevamente
              this.propiedad = new Propiedad();
              this.foto_seleccionada = null;
            } else {
              // Redirige al menú principal o a donde sea necesario
              this.servicioRutas.navigateByUrl('/');//('/listados-pro');
            }
        },
      });
    
    }
  } else {
    console.log('No se ha proporcionado el DNI del cliente');
  }

}

  seleccionarFoto(evento: Event) {
    console.log("foto cambiada");
    //evento.target //éste es el input file
    let input_file = evento.target as HTMLInputElement;

    if (input_file.files) {

      this.foto_seleccionada = input_file.files[0];

        console.log("Nombre fichero sel = " + this.foto_seleccionada.name);
        console.log("Tipo fichero sel = " + this.foto_seleccionada.type);
      
      // si es una imagen, perfecto "me la quedo" aqui sabemos si ha seleccionado
      // el usuario la foto
      if (this.foto_seleccionada.type.indexOf('image') >= 0) {
        console.log("el usuario ha seleccionado una imagen");
        this.propiedad.fotoHashCode = this.foto_seleccionada.size;
      } else {
        console.log("el usuario NO ha seleccionado una imagen");
        this.foto_seleccionada = null;
        this.propiedad.fotoHashCode = 0;
        //si no, la elimino, "no me la quedo"
      }
    }
  }
}
