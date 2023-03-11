import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {config} from "rxjs";

const routes: Routes = [
  {path:'login',loadChildren:() => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path:'authorized',loadChildren:() => import('./pages/main/main.module').then(m => m.MainModule)},
  {path:'**',redirectTo:'authorized'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
