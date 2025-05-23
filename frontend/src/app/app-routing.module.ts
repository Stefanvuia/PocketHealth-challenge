import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent }   from './home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home',     component: HomeComponent     },
  { path: '',         redirectTo: '/register', pathMatch: 'full' },
  { path: '**',       redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
