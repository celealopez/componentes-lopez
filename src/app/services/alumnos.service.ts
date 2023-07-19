import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  public alumnos: Alumno[] = [];

  constructor(public http: HttpClient) { }

  obtener(): Observable<Alumno[]> {
    const url = 'https://63645a9d7b209ece0f451a47.mockapi.io/alumnos';
    return this.http.get<Alumno[]>(url);
  }

  guardar(data : Alumno):Observable<Alumno> {
    return this.http.post<Alumno>("https://63645a9d7b209ece0f451a47.mockapi.io/alumnos",data)
  }

  eliminar(id: string): Observable<any> {
    const url = `https://63645a9d7b209ece0f451a47.mockapi.io/alumnos/${id}`; 
    return this.http.delete<any>(url);
  }

  editar(alumno: Alumno):Observable<any>{
    const url = `https://63645a9d7b209ece0f451a47.mockapi.io/alumnos/${alumno.id}`; 
    return this.http.put<Alumno>(url,alumno);
  }


}
