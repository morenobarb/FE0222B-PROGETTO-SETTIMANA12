import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { MoviesComponent } from '../component/movies/movies.component';

const routes: Routes = [
{path:'', redirectTo:'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path : 'register', component: RegisterComponent},
{ path : 'movies' ,component :MoviesComponent }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
