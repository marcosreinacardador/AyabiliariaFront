import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Injectable } from '@angular/core';

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

    getListaClientes(): Observable<Array<Cliente>> {
      return this.http.get<Array<Cliente>>(AyabiliariaService.URL_ACTUAL+'/listarClientes');
    }

    getClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(AyabiliariaService.URL_ACTUAL+'/listarClientes'); // Cambia la URL según tu API
    }
    
    // Metodo que comunica con el servidor  GET http://localhost:8081/ayabiliaria/pagina?page=0&size=2
     getClientesPorPaginas(page: number, size: number): Observable<any> {
       let parametros: HttpParams = new HttpParams()
        .set('page', page)
        .set('size', size);
     return this.http.get<any>(AyabiliariaService.URL_ACTUAL + '/pagina', {
       params: parametros,
     });

  }
}