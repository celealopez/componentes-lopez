import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitulo20px]'
})
export class Titulo20pxDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }
}
