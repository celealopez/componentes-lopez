import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MenuIzquierdaComponent } from './componentes/menu-izquierda/menu-izquierda.component';
import { AreaContenidoComponent } from './componentes/area-contenido/area-contenido.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EdicionAlumnoComponent } from './componentes/edicion-alumno/edicion-alumno.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { AuthComponent } from './auth/auth/auth.component';
import { AreaContenidoCursosComponent } from './componentes/area-contenido-cursos/area-contenido-cursos.component';
import { EdicionCursoComponent } from './componentes/edicion-curso/edicion-curso.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InscripcionesACursosComponent } from './componentes/inscripciones-a-cursos/inscripciones-a-cursos.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuIzquierdaComponent,
    AreaContenidoComponent,
    EdicionAlumnoComponent,
    NombreCompletoPipe,
    AuthComponent,
    AreaContenidoCursosComponent,
    EdicionCursoComponent,
    InicioComponent,
    InscripcionesACursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
