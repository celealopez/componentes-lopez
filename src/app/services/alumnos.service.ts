import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(public http: HttpClient) { }

  obtener(): Observable<Alumno[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<Alumno[]>(url);
  }

}
