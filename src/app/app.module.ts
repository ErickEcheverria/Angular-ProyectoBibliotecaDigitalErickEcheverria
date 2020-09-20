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
import { PrincipalLibrosrevistasComponent } from './components/principal-librosrevistas/principal-librosrevistas.component';
import { ModificarLibrorevistaComponent } from './components/modificar-librorevista/modificar-librorevista.component';
import { EliminarLibrorevistaComponent } from './components/eliminar-librorevista/eliminar-librorevista.component';
import { RegisterLibrorevistaComponent } from './components/register-librorevista/register-librorevista.component';

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
    EliminarComponent,
    PrincipalLibrosrevistasComponent,
    ModificarLibrorevistaComponent,
    EliminarLibrorevistaComponent,
    RegisterLibrorevistaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
