import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogininfoserviceService {

  isLoggedIn : boolean  = false;
  userName:any = 'guest';

  constructor() {
    if(localStorage.getItem('isLoggedIn') == 'true') {
      this.userName = localStorage.getItem('userName');
      this.isLoggedIn = true
    }


  }

  logMeIn(name:string) {
    this.isLoggedIn = true;
    this.userName = name;
    localStorage.setItem("isLoggedIn",'true');
    localStorage.setItem('userName',name)
  }
}
