import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from '../interfaces/collaborators.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ColaboradoresService {
  private apiUrl = 'http://localhost:3000/colaboradores';
  private apiUrl2 = 'http://localhost:3000/colaboradores?_page=1&_per_page=10';

  constructor(private http: HttpClient) {}

  getColaboradores(): Observable<Colaborador[]> {
    return this.http
      .get<any>(this.apiUrl2)
      .pipe(map((response) => response.data));
  }

  getOneColaborador(id: string): Observable<Colaborador> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Colaborador>(url);
  }

  addColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl, colaborador);
  }

  updateColaborador(
    id: string,
    colaborador: Colaborador
  ): Observable<Colaborador> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Colaborador>(url, colaborador);
  }

  deleteColaborador(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getTabela(): Observable<Colaborador[]> {
    return this.http
      .get<any>(this.apiUrl2)
      .pipe(map((response) => response.data));
  }
}
