import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private apiUrl = 'https://667266866ca902ae11b01dc2.mockapi.io/api/v1/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl); // Realiza una solicitud GET a la API y retorna un observable que emite la lista de clientes
  }
}
