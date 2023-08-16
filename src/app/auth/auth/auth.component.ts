
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/inicio']); // Cambia '/dashboard' por la ruta correcta
    } else {
      alert('Credenciales inválidas');
    }
  }
}