import {Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHeading } from '../models/i-heading';
import { IProduct } from '../models/i-products';
import { IProvince } from '../models/i-province';
import { ILocality } from '../models/i-locality';
import { IBranch } from '../models/i-branch';
import { IFinalCompared } from '../models/i-final-compared';

@Injectable()
export class IndecResourceService {

  private apiUrl = `${environment.apiUrl}/indec`;

  constructor(private _http: HttpClient) {}

  private getHeaders() {
    const locale = localStorage.getItem('locale_id') || 'es-AR';
    return { 'Accept-Language': locale };
  }

  getCaterogies(): Observable<IHeading[]> {
    const headers = this.getHeaders();
    return this._http.get<IHeading[]>(`${this.apiUrl}/categorias`, { headers });
  }

  getProducts(filters: { categoryId?: number | null, productTypeId?: number | null, brandId?: number | null, headingId?: number | null }): Observable<IProduct[]> {
    const headers = this.getHeaders();
    return this._http.post<IProduct[]>(`${this.apiUrl}/productos`, filters, { headers });
  }

  getProvincias(): Observable<IProvince[]> {
    return this._http.get<IProvince[]>(`${this.apiUrl}/provincias`);
  }

  getLocalidades(provinceCode: string): Observable<ILocality[]> {
    return this._http.post<ILocality[]>(`${this.apiUrl}/localidades`, provinceCode, {
      headers: { 'Content-Type': 'application/json' }
  });
  }

  getBranches(localityId: number): Observable<IBranch[]> {
    return this._http.post<IBranch[]>(`${this.apiUrl}/informacion-sucursales`, localityId, {
      headers: { 'Content-Type': 'application/json' }
  });
  }

  getBranchesBySuper(superId: number): Observable<IBranch[]> {
    return this._http.post<IBranch[]>(`${this.apiUrl}/info-sucursales-super`, superId, {
      headers: { 'Content-Type': 'application/json' }
  });
  }

  getComparedProducts( localityId: number, barcode: string[] ): Observable<IFinalCompared[]> {
    const criteria = {
      localityId: localityId,
      barcodes: barcode
    };
    return this._http.post<IFinalCompared[]>(`${this.apiUrl}/comparador`, criteria );
  }

}