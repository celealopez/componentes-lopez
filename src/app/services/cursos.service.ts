import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos: Curso[] = [];
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(public http: HttpClient) { }

  obtener(): Observable<Curso[]> {
    const url = 'https://63645a9d7b209ece0f451a47.mockapi.io/cursos';
    return this.http.get<Curso[]>(url);
  }

  guardar(data : Curso):Observable<Curso> {
    return this.http.post<Curso>("https://63645a9d7b209ece0f451a47.mockapi.io/cursos",data)
  }

  eliminar(id: string): Observable<any> {
    const url = `https://63645a9d7b209ece0f451a47.mockapi.io/cursos/${id}`; 
    return this.http.delete<any>(url);
  }

  editar(Curso: Curso):Observable<any>{
    const url = `https://63645a9d7b209ece0f451a47.mockapi.io/cursos/${Curso.id}`; 
    this.newItemEvent.emit('Curso editado');
    return this.http.put<Curso>(url,Curso);
  }
}
