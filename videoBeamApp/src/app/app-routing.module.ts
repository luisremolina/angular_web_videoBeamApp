import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'auth',
    loadChildren: () => import('./Autentification/autentification.module').then(m => m.AutentificationModule)
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
