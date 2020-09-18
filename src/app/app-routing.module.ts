import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { LoginComponent } from "./components/login/login.component"
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrincipalBibliotecaComponent } from './components/principal-biblioteca/principal-biblioteca.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'principalBiblioteca', component: PrincipalBibliotecaComponent},
  {path: 'modificar', component: ModificarComponent},
  {path: 'eliminar', component: EliminarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
