import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CoreComponent } from './core.component';
import { PlansComponent } from '../content/plans/plans.component';
import { MealsComponent } from '../content/meals/meals.component';

const routes: Routes = [
  { path: '', component: CoreComponent, children: [
    { path: '', redirectTo: 'plans', pathMatch: 'full'},
    { path: 'plans', component: PlansComponent },
    { path: 'menus', component: MealsComponent }
  ],
   canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
