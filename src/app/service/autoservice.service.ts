import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoserviceService {

  constructor() { }

  isLogin() {

    let isLoggedIn = localStorage.getItem("DrivenFormValue");
    console.log("isLogin Service called");

    if (isLoggedIn == "true") return true;
    else return false;

  }

}
