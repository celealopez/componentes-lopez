import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';



@Component({
  selector: 'app-area-contenido',
  templateUrl: './area-contenido.component.html',
  styleUrls: ['./area-contenido.component.scss']
})
export class AreaContenidoComponent implements OnInit {
alumnos : Alumno [] = [];
userModel:FormGroup = new FormGroup({});
listaAlumnos:any[] = [];
  constructor(public alumnoService : AlumnosService, private fb : FormBuilder , public http : HttpClient) { 
this.userModel = this.fb.group({
  name:new FormControl(null, [Validators.required]),
  username:new FormControl(null, [Validators.required]),
  dni:new FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
  phone:new FormControl(null, [Validators.required,Validators.pattern('^[0-9]*$')]),
  email:new FormControl(null, [Validators.required,Validators.email]),
})
  }

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

guardar(){
  if(this.userModel.valid){
this.listaAlumnos.push(this.userModel.value);
this.userModel.reset();
this.userModel.markAsUntouched();
}else{
  alert("Sus datos están incorrectos. Verifique");
}
}
}
