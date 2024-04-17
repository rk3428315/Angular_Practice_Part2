import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email !: any;
  password !: any;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.redirectLoginPageDirect();
  }

  // Redirect when page in already logged in
  redirectLoginPageDirect() {
    let isLoggedIn = localStorage.getItem("DrivenFormValue");
    if (isLoggedIn == 'true') {
      this.router.navigate(['/home']);
    }
  }
  // ---------------------------------------


  // // To check user is exist or not then logIn
  // login(email: any, password: any) {

  //   console.log("login called");

  //   if (email == "ravi@gmail.com" && password == "123") {
  //     localStorage.setItem("islogin", "true");
  //     this.router.navigate(["/home"]);

  //   }
  //   else {
  //     localStorage.setItem('islogin', "false");
  //   }

  // }
  //----------------------------------------------------


  // Set template driven form value

  loginDrivenForm(login: any) {
    let email = login.controls.email.value;
    let password = login.controls.password.value;
    console.log(login, "login driven form value");

    if (email && password) {

      localStorage.setItem("DrivenFormValue", "true");
      this.router.navigate(["/home"]);

    }
    else {
      localStorage.setItem("DrivenFormValue", "false");

    }

  }

}
