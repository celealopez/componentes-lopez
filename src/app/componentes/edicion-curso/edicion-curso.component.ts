import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-edicion-curso',
  templateUrl: './edicion-curso.component.html',
  styleUrls: ['./edicion-curso.component.scss']
})
export class EdicionCursoComponent implements OnInit {
  public alumno : Curso;
  alumnos : Curso [] = [];
  userModel:FormGroup = new FormGroup({});
  constructor( private dialogRef: MatDialogRef<EdicionCursoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Curso, public cursosService : CursosService,private fb : FormBuilder) { 

      this.alumno = { id: data.id, 
        nombre: data.nombre, 
        tipo: data.tipo};
      this.userModel = this.fb.group({
        id:new FormControl(data.id, [Validators.required]),
        nombre:new FormControl(data.nombre, [Validators.required]),
        tipo:new FormControl(data.tipo, [Validators.required]),
      })
    }

  ngOnInit(): void {
  }

  guardarCambios(alumno: Curso): void {
    this.cursosService.editar(alumno).subscribe({
      next: () => {
        this.cursosService.newItemEvent.emit('Alumno editado');
      },
          error: (error: any) => {
            console.error(error);
          },
        });
    this.dialogRef.close(this.alumno);
  }


  cerrar(): void {
    this.dialogRef.close();
  }

}

