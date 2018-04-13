import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AuthGuard } from './_guard/index';
import { AutenticacionService, UsuarioService } from './_services/index';
import { routing } from './app.routing';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuAdminComponent, NivelComponent, CursosComponent, PruebasComponent } from './componentes/admin/index';
import { MaterialComponent, MenuEstComponent, PruebaComponent, PerfilComponent } from './componentes/estudiante/index';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuAdminComponent,
    NivelComponent,
    CursosComponent,
    PruebasComponent,
    MaterialComponent,
    MenuEstComponent,
    PruebaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AutenticacionService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
