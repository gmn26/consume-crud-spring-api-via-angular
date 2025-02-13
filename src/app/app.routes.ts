import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/main/home/home.component';
import { DashboardHomeComponent } from './pages/dashboard/dashboard-home/dashboard-home.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Landing Page"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login Page"
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: "Register Page"
  },
  {
    path: 'dashboard',
    component: DashboardHomeComponent,
    title: "Home Dashboard Page"
  }
];
