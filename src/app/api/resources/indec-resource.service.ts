import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHeading } from '../models/i-heading';
import { IProduct } from '../models/i-products';

@Injectable()
export class IndecResourceService {

  private apiUrl = `${environment.apiUrl}/indec`;

  constructor(private _http: HttpClient) {}

  getCaterogies(): Observable<IHeading[]> {
    const headers = { 'Accept-Language': 'ES' };
    return this._http.get<IHeading[]>(`${this.apiUrl}/categorias`, { headers });
  }

  getProducts(filters: { categoryId?: number | null, productTypeId?: number | null, brandId?: number | null, headingId?: number | null }): Observable<IProduct[]> {
    const headers = { 'Accept-Language': 'ES' };
    return this._http.post<IProduct[]>(`${this.apiUrl}/productos`, filters, { headers });
  }
}