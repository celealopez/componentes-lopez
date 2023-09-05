import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaContenidoComponent } from './componentes/area-contenido/area-contenido.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AppComponent } from './app.component';
import { AreaContenidoCursosComponent } from './componentes/area-contenido-cursos/area-contenido-cursos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AuthGuard } from './auth/auth/auth.guard';
import { RoleGuard } from './services/role-guard';

const routes: Routes = [
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'area-contenido',
    component: AreaContenidoComponent, 
    canActivate: [AuthGuard]
  },
  {
    path:'auth',
    component: AuthComponent, 
    canActivate: [AuthGuard]
  },
  {
    path:'area-contenido-cursos',
    component: AreaContenidoCursosComponent, 
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    component: AuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
