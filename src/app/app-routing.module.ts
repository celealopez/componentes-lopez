import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaContenidoComponent } from './componentes/area-contenido/area-contenido.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AppComponent } from './app.component';
import { AreaContenidoCursosComponent } from './componentes/area-contenido-cursos/area-contenido-cursos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path:'area-contenido',
    component: AreaContenidoComponent
  },
  {
    path:'auth',
    component: AuthComponent
  },
  {
    path:'area-contenido-cursos',
    component: AreaContenidoCursosComponent
  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'**',
    component: InicioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
