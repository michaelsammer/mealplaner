import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CoreComponent } from './core/core.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
