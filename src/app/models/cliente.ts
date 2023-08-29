export class Cliente {
    dni:string;
    nombre:string;
    apellidos:string;
    telefonoContacto:string;
    correoElectronico:string;
    datosBancarios:string;
  static editando: boolean;

    constructor(){
        this.dni = '';
        this.nombre = '';
        this.apellidos = '';
        this.telefonoContacto = '';
        this.correoElectronico = '';
        this.datosBancarios = '';
    }
}
