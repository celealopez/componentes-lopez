import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | UrlTree {
      // Verifica el rol del usuario autenticado
      const userRole = this.authService.getRole();
  
      // Verifica si la ruta tiene un atributo 'role' y compáralo con el rol del usuario
      if (route.data && route.data['role'] && route.data['role'] !== userRole) {
        // Redirige a la página de acceso denegado o muestra un mensaje de error
        return this.router.createUrlTree(['/acceso-denegado']);
      }
  
      // Si el usuario tiene el rol correcto, permite el acceso
      return true;
    }
  }