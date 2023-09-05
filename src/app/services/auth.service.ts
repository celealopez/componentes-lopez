import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Usuario con credenciales válidas
  private validUserAdmin = {
    email: 'a@gmail.com',
    password: '1234',
    role: 'admin'
  };

  private validUserGeneral = {
    email: 'g@gmail.com',
    password: '1234',
    role: 'general'
  };

  private currentUserRole: string | null = null; // Agrega una propiedad para almacenar el rol actual

  private isLoggedIn = false;

  constructor() {}

  // Método para realizar el inicio de sesión
  login(email: string, password: string): boolean {
    if (
      (email === this.validUserAdmin.email && password === this.validUserAdmin.password) ||
      (email === this.validUserGeneral.email && password === this.validUserGeneral.password)
    ) {
      this.isLoggedIn = true;
      this.currentUserRole = email === this.validUserAdmin.email ? 'admin' : 'general'; // Establece el rol actual
      return true;
    }
    return false;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Método para obtener el rol actual
  getRole(): string | null {
    return this.currentUserRole;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isLoggedIn = false;
    this.currentUserRole = null; // Limpia el rol actual al cerrar sesión
  }
}