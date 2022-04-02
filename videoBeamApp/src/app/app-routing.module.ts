import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Autentification/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./Autentification/autentification.module').then(m => m.AutentificationModule)
      },
      {
        path: 'main',
        loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
      },
    ]    
  },
  {
    path: '**',
    loadChildren: () => import('./Autentification/autentification.module').then(m => m.AutentificationModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
