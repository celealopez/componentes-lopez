import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-area-contenido',
  templateUrl: './area-contenido.component.html',
  styleUrls: ['./area-contenido.component.scss']
})
export class AreaContenidoComponent implements OnInit {
alumnos : Alumno [] = [];
  constructor(public alumnoService : AlumnosService) { }

  async ngOnInit (){
 this.usuarios();
  }

  public usuarios(){
    this.alumnoService.obtener().subscribe({
      next: (data: Alumno[]) => {
        this.alumnos = data;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
      }
    });
  }

}
