import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuario con credenciales válidas
  private validUser = {
    email: 'g@gmail.com',
    password: '1234'
  };

  private isLoggedIn = false;

  constructor() {}

  // Método para realizar el inicio de sesión
  login(email: string, password: string): boolean {
    if (email === this.validUser.email && password === this.validUser.password) {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isLoggedIn = false;
  }
}