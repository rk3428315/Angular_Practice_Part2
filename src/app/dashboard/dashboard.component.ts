import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ngOnInit():void{

    // this.showTabUnderLine();
  }

  constructor(private router:Router){

  }

  logOut(){
    localStorage.setItem("DrivenFormValue", "false");
    this.router.navigate(['/login'])
  }

  // showTabUnderLine(){
  //   let underline = document.querySelector("#nav-tab h6");
  //   underline?.addEventListener("mouseover",function(){
  //     document.querySelector("#nav-tab h6")displa = "red";
  //   })
  // }
}
