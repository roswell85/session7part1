import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {PrimeNGConfig} from "primeng/api";
import {RippleModule} from "primeng/ripple";
import { FooterComponent } from './components/footer/footer.component';
import {LogininfoserviceService} from "./commonlib/logininfoservice.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, ButtonModule, RippleModule
  ],
  providers: [PrimeNGConfig,LogininfoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
