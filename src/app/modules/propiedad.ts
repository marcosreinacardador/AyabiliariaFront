import { Cliente } from "./cliente";

export class Propiedad {
  numeroReferencia: number;
  cliente: Cliente;
  tipoPropiedad: string;
  operacion: string;
  estado: boolean;
  direccion: string;
  localidad: string;
  poblacion: string;
  codigoPostal: string;
  total: number;
  descripcion: string;
  fotoHashCode:number;

  constructor(
    //numeroReferencia: number,
    //cliente: Cliente,
  // // tipoPropiedad: string,
  // // operacion: string,
  // // estado: number,
  // // direccion: string,
  // // localidad: string,
  // // poblacion: string,
  // // codigoPostal: string,
  // // total: number,
  // // descripcion: string,
  // // creadoEN: Date,
  // // fotoHashCode: number
  ) {
    this.numeroReferencia;
    this.cliente;
    this.tipoPropiedad = '';
    this.operacion = '';
    this.estado = true;
    this.direccion = '';
    this.localidad = '';
    this.poblacion = '';
    this.codigoPostal = '';
    this.total;
    this.descripcion = '';
    this.fotoHashCode = 0;
  }
}
