import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso.model';
import { AuthService } from 'src/app/services/auth.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-inscripciones-a-cursos',
  templateUrl: './inscripciones-a-cursos.component.html',
  styleUrls: ['./inscripciones-a-cursos.component.scss']
})
export class InscripcionesACursosComponent implements OnInit {
  cursos$: Observable<Curso[]> = new Observable<Curso[]>(); 
  isAdmin = false;
  constructor(public cursoService : CursosService, private fb : FormBuilder , public http : HttpClient,private dialog: MatDialog, public authService :AuthService) { 
   
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

}
