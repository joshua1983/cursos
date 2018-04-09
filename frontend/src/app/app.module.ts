import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { AuthGuard } from './_guard/index';
import { AutenticacionService, UsuarioService } from './_services/index';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuAdminComponent } from './componentes/admin/index';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuAdminComponent
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
