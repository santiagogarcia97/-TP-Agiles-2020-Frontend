import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Response {
  palabra: string;
  cantActualVidas: number;
  estadoPartida: string;
  letrasArriesgadas: string[];
  nombreJugador: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackService {

  url = 'http://localhost:4200/';

  headers = new HttpHeaders();
  options = {};

  constructor( private http: HttpClient ) {

    this.headers.set('Accept', 'application/json')
    .append('Access-Control-Allow-Origin', '*')
    .append('Content-type', 'application/x-www-form-urlencoded')
    .append('X-Requested-With', 'XMLHttpRequest');

    this.options = { headers: this.headers, withCredentials: true};

  }


  iniciar(nombre: string): Observable<Response> {
    const url = `${this.url}iniciar`;
    const data = { nombre };
    return this.http.post<Response>(url, data, this.options);
  }

  enviarLetra(letra: string): Observable<Response> {
    const url = `${this.url}enviar-letra`;
    const data = { letra };
    return this.http.post<Response>(url, data, this.options);
  }


}
