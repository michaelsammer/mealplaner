import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogActions, MatDialogClose} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { CdkDrag, CdkDropList, CdkDragHandle, CdkDropListGroup } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PlansComponent } from './content/plans/plans.component';
import { MealsComponent } from './content/meals/meals.component';
import { DayMealCellComponent } from './content/plans/components/day-meal-cell/day-meal-cell.component';
import { AddMenuDialogComponent } from './content/plans/components/add-menu-dialog/add-menu-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CoreComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PlansComponent,
    MealsComponent,
    DayMealCellComponent,
    AddMenuDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MatIconModule,
    MatSidenavModule,
    MatDialogActions,
    MatDialogClose,
    MatFormField,

    CdkDrag,
    CdkDropList,
    CdkDragHandle,
    CdkDropListGroup,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
