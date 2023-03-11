import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ChipModule} from "primeng/chip";
import {CheckboxModule} from "primeng/checkbox";
import {ChipsModule} from "primeng/chips";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    CheckboxModule,
    ChipsModule
  ]
})
export class LoginModule { }
