import { Component } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {NavigationStart, Router} from "@angular/router";
import {LogininfoserviceService} from "./commonlib/logininfoservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private pngConfig:PrimeNGConfig,private _router:Router,private _logservice:LogininfoserviceService) {
    this.pngConfig.ripple  = true;
    this._router.events.subscribe(
      (e) =>
      {
        if(e instanceof  NavigationStart){
          let url = e.url
          if(url.includes("authorized")){
            if(this._logservice.isLoggedIn == false){
              this._router.navigate(['login'])

            }
          }else{
            if(this._logservice.isLoggedIn){
              this._router.navigate(['authorized'])


            }
          }
        }

      }
    )
  }
  title = 's7';
}
