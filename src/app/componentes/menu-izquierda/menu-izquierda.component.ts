import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-izquierda',
  templateUrl: './menu-izquierda.component.html',
  styleUrls: ['./menu-izquierda.component.scss']
})
export class MenuIzquierdaComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
