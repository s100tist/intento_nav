import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegatorComponent } from './components/navegador/navegator.component';



const routes: Routes = [
  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: NavegatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
