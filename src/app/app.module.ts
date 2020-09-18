import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrincipalBibliotecaComponent } from './components/principal-biblioteca/principal-biblioteca.component';
import { NavbarSesionComponent } from './components/navbar-sesion/navbar-sesion.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    PrincipalBibliotecaComponent,
    NavbarSesionComponent,
    ModificarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
