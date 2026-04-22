import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceBolsas {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:5000/bolsas';

  listar(){
    return this.http.get<any[]>(this.apiUrl);
  }
}
