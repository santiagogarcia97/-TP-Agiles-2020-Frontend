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
    const url = `https://agiles-backend-2020.herokuapp.com/iniciar`;
    const data = { nombre };
    return this.http.post<Response>(url, data, this.options);
  }

  enviarLetra(letra: string): Observable<Response> {
    const url = `https://agiles-backend-2020.herokuapp.com/enviar-letra`;
    const data = { letra };
    return this.http.post<Response>(url, data, this.options);
  }


}
