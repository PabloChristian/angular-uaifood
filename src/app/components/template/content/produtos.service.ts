import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'http://localhost:3100/api/produtos';

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto>{
    return this.http.get<Produto>(this.API);
  }
    
}