import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propiedad } from 'src/app/models/propiedad';
import { AyabiliariaService } from 'src/app/services/ayabiliaria.service';

@Component({
  selector: 'app-alta-pro',
  templateUrl: './alta-pro.component.html',
  styleUrls: ['./alta-pro.component.css']
})
export class AltaProComponent implements OnInit {
  
  propiedad: Propiedad = new Propiedad(); // Asegúrate de tener la clase Propiedad definida correctamente

  dniCliente: string | null = null;

  //union type es un objeto de dos tipos, tambien se puede any
  foto_seleccionada!: File|null;  


  constructor(private ayabilidaria: AyabiliariaService, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.dniCliente = params['dniCliente'];
    });
  }

  guardarPropiedad() {
    this.propiedad.cliente.dni = this.dniCliente;
    // Aquí puedes agregar la lógica para guardar la propiedad
    // Por ejemplo, llamando a un servicio o realizando una petición HTTP
    console.log('Propiedad guardada');
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
      } else {
        console.log("el usuario NO ha seleccionado una imagen");
        this.foto_seleccionada = null;
        //si no, la elimino, "no me la quedo"
      }
    }
  }
}
