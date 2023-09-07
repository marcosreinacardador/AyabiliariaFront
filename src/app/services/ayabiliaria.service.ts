import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from '../modules/cliente';
import { Injectable } from '@angular/core';
import { Propiedad } from '../modules/propiedad';

@Injectable({
  providedIn: 'root'
})

export class AyabiliariaService {
  
  // para usarlo en modo para verlo con el puerto 8081
  // static readonly URL_INMO_PROD: string = 'ayabiliaria';

  // para usarlo en modo local usar esta constante
  static readonly URL_INMO_TEST: string = 'http://localhost:8081/ayabiliaria';

  // sólo cambiar la URL del AyabiliariaService
  static readonly URL_ACTUAL: string = AyabiliariaService.URL_INMO_TEST;

  //static readonly URL_ACTUAL: string = AyabiliariaService.URL_INMO_PROD;

  cabeceras: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(private http: HttpClient) { }

    // Obtenemos todos los clientes 
    getClientes(): Observable<Array<Cliente>> {
      return this.http.get<Array<Cliente>>(AyabiliariaService.URL_ACTUAL+'/listarClientes'); // Cambia la URL según tu API
    }

    // Obtenemos todos las propiedades
    getPropiedades() {
      return this.http.get<Array<Propiedad>>(AyabiliariaService.URL_ACTUAL + '/listadoPropiedades');
    }

    // Metodo que comunica con el servidor  GET http://localhost:8081/ayabiliaria/pagina?page=0&size=2
    getClientesPorPaginas(page: number, size: number): Observable<any> {
    console.log('numero paginas: '+ page + ' tamaño:'+ size);
      let parametros: HttpParams = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>(AyabiliariaService.URL_ACTUAL + '/paginaCli', {
      params: parametros,
    });
  }

  // Metodo que comunica con el servidor  GET http://localhost:8081/ayabiliaria/pagina?page=0&size=2
  getPropiedadesPorPagina(page: number, size: number): Observable<any> {
    console.log('numero paginas: '+ page + ' tamaño:'+ size);
      let parametros: HttpParams = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<any>(AyabiliariaService.URL_ACTUAL + '/paginaPro', {
      params: parametros,
    });
  }
    
    //Añadir un cliente nuevo
    postAltaClienteService(cliente: Cliente): Observable<Cliente>{
      return this.http.post<Cliente>(AyabiliariaService.URL_ACTUAL + '/altaCliente', cliente,
      { headers: this.cabeceras });
    }

    //Añadir una propiedad nueva con foto
    postAltaPropiedad(propiedad: Propiedad, archivo: File): Observable<Propiedad> {
      //declaramos una variable local que represente el FormData
      let formData = new FormData();
      formData.append('cliente', propiedad.cliente.dni);  // cliente tiene un campo dni que es el indice
      formData.append('tipoPropiedad', propiedad.tipoPropiedad);
      formData.append('operacion', propiedad.operacion);
      formData.append('direccion', propiedad.direccion);
      formData.append('localidad', propiedad.localidad);
      formData.append('poblacion', propiedad.poblacion);
      formData.append('codigoPostal', propiedad.codigoPostal);
      formData.append('total', propiedad.total.toString());
      formData.append('descripcion', propiedad.descripcion);
      formData.append('estado', propiedad.estado.toString());  // Convertir booleano a cadena
      formData.append('archivo', archivo);
      
      return this.http.post<Propiedad>(AyabiliariaService.URL_ACTUAL + '/altaPropiedad', formData);
    }



   

  
}