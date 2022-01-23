import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

/**
 * obtengo la informacion a traves del metodo getDatos, post como dice la prueba, en vez del get que es lo comun
 */
@Injectable({
  providedIn: 'root'
})
export class ListaService {
  _url = 'https://api-dev.vigpro.com/api/actuaciones-prueba'
  constructor(
    private http: HttpClient
  ) {

  }

  getDatos() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    return this.http.post(this._url, { headers: header });
  }
}
