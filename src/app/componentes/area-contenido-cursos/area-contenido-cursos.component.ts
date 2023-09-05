import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';
import { EdicionCursoComponent } from '../edicion-curso/edicion-curso.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-area-contenido-cursos',
  templateUrl: './area-contenido-cursos.component.html',
  styleUrls: ['./area-contenido-cursos.component.scss']
})
export class AreaContenidoCursosComponent  implements OnInit {
  cursos$: Observable<Curso[]> = new Observable<Curso[]>(); 
userModel:FormGroup = new FormGroup({});
listaAlumnos:any[] = [];
isAdmin = false;
  constructor(public cursoService : CursosService, private fb : FormBuilder , public http : HttpClient,private dialog: MatDialog, public authService :AuthService) { 
this.userModel = this.fb.group({
  nombre:new FormControl(null, [Validators.required]),
  tipo:new FormControl(null, [Validators.required])
})
this.cursos$ = this.cursoService.obtener();
  }

  async ngOnInit (){
 this.usuarios();
 this.cursoService.newItemEvent.subscribe((data)=> {
  this.usuarios();
 })
 const userRole = this.authService.getRole();
 if(userRole == 'admin'){
  this.isAdmin = true;
} ;
  }

  public usuarios(){
    this.cursos$ = this.cursoService.obtener();
  }

  public guardar(alumno: Curso): void {
  if(this.userModel.valid){
      this.cursoService.guardar(alumno).subscribe({
        next: () => {
          this.cursoService.obtener().subscribe({
            next: (data: Curso[]) => {
              this.cursos$ = this.cursoService.obtener();
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
  this.cursoService.eliminar(id).subscribe({
    next: () => {
      this.cursoService.obtener().subscribe({
        next: (data: Curso[]) => {
          this.cursos$ = this.cursoService.obtener();
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

public editarAlumno(alumno: Curso): Observable<any>  {
    const dialogRef = this.dialog.open(EdicionCursoComponent, {
      data: alumno 
    }); 
      this.cursoService.obtener().subscribe({
        next: (data: Curso[]) => {
          this.cursos$ = this.cursoService.obtener();
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
  
  
  

