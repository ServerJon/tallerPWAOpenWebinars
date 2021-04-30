import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Entrada } from '../interfaces/entrada.interface';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<Entrada[]> {

    return this.httpClient.get<Entrada[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public recuperarEntrada(id: number): Observable<Entrada> {

    return this.httpClient.get<Entrada>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  public editarEntrada(entrada: Entrada): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts', entrada, { headers });
  }
}
