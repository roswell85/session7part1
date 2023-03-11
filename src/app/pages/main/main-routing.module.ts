import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main.component";

const routes: Routes = [
  {path:"main",component:MainComponent,children:[
      {path:'dashboard',loadChildren:()=>import("../authorizedComponents/home/home.module").then(m=>m.HomeModule)},
      {path:'',redirectTo:'dashboard',pathMatch:'full'}
    ]},
  {path:'',pathMatch:'full',redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
