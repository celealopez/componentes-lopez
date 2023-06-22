import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MenuIzquierdaComponent } from './componentes/menu-izquierda/menu-izquierda.component';
import { AreaContenidoComponent } from './componentes/area-contenido/area-contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuIzquierdaComponent,
    AreaContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
