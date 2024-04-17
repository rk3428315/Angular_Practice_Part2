import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthchildGuard } from './authchild.guard';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: '', redirectTo: "login", pathMatch: "full" },

  { path: "home", component: DashboardComponent, canActivate: [AuthGuard] },

  { path: "aboutus", component: AboutusComponent, canActivate: [AuthGuard] },
  { path: "contactus", component: ContactusComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
