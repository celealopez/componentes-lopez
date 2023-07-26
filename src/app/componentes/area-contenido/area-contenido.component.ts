import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { MatDialog } from '@angular/material/dialog';
import { EdicionAlumnoComponent } from '../edicion-alumno/edicion-alumno.component';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-area-contenido',
  templateUrl: './area-contenido.component.html',
  styleUrls: ['./area-contenido.component.scss']
})
export class AreaContenidoComponent implements OnInit {
  alumnos$: Observable<Alumno[]> = new Observable<Alumno[]>(); 
userModel:FormGroup = new FormGroup({});
listaAlumnos:any[] = [];
  constructor(public alumnoService : AlumnosService, private fb : FormBuilder , public http : HttpClient,private dialog: MatDialog) { 
this.userModel = this.fb.group({
  nombre:new FormControl(null, [Validators.required]),
  apellido:new FormControl(null, [Validators.required]),
  dni:new FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
})
this.alumnos$ = this.alumnoService.obtener();
  }

  async ngOnInit (){
 this.usuarios();
 this.alumnoService.newItemEvent.subscribe((data)=> {
  this.usuarios();
 })
  }

  public usuarios(){
    this.alumnos$ = this.alumnoService.obtener();
  }

  public guardar(alumno: Alumno): void {
  if(this.userModel.valid){
      this.alumnoService.guardar(alumno).subscribe({
        next: () => {
          this.alumnoService.obtener().subscribe({
            next: (data: Alumno[]) => {
              this.alumnos$ = this.alumnoService.obtener();
            },
            error: (error: any) => {
              console.error(error);
            },
            complete: () => {
            }
          });
        },
        error: (error: any) => {
          console.error(error);
        }
      });
this.userModel.reset();
this.userModel.markAsUntouched();
}else{
  alert("Sus datos están incorrectos. Verifique");
}
}


public eliminarAlumno(id: string): void {
  this.alumnoService.eliminar(id).subscribe({
    next: () => {
      this.alumnoService.obtener().subscribe({
        next: (data: Alumno[]) => {
          this.alumnos$ = this.alumnoService.obtener();
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
        }
      });
    },
    error: (error: any) => {
      console.error(error);
    }
  });
}

public editarAlumno(alumno: Alumno): Observable<any>  {
    const dialogRef = this.dialog.open(EdicionAlumnoComponent, {
      data: alumno 
    }); 
      this.alumnoService.obtener().subscribe({
        next: (data: Alumno[]) => {
          this.alumnos$ = this.alumnoService.obtener();
        },
        error: (error: any) => {
          console.error(error);
        },
        complete: () => {
        }
      });

    
    return dialogRef.afterClosed();
  }
}
  
  
  
