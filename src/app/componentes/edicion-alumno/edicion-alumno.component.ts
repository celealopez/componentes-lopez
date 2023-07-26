import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-edicion-alumno',
  templateUrl: './edicion-alumno.component.html',
  styleUrls: ['./edicion-alumno.component.scss']
})
export class EdicionAlumnoComponent implements OnInit {
  public alumno : Alumno;
  alumnos : Alumno [] = [];
  userModel:FormGroup = new FormGroup({});
  constructor( private dialogRef: MatDialogRef<EdicionAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Alumno, public alumnoService : AlumnosService,private fb : FormBuilder ) { 

      this.alumno = { id: data.id, 
        nombre: data.nombre, 
        apellido: data.apellido,
        dni: data.dni};
      this.userModel = this.fb.group({
        id:new FormControl(data.id, [Validators.required]),
        nombre:new FormControl(data.nombre, [Validators.required]),
        apellido:new FormControl(data.apellido, [Validators.required]),
        dni:new FormControl(data.dni, [Validators.required,Validators.pattern('^[0-9]*$')]),
      })
    }

  ngOnInit(): void {
  }

  guardarCambios(alumno: Alumno): void {
    this.alumnoService.editar(alumno).subscribe({
      next: () => {
        this.alumnoService.newItemEvent.emit('Alumno editado');
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
