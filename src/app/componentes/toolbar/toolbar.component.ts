import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public authService : AuthService, public router : Router) { }

  ngOnInit(): void {
  }

  salir() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
