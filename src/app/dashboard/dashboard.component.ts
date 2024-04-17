import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ngOnInit():void{
  }

  constructor(private router:Router){

  }

  logOut(){
    localStorage.setItem("DrivenFormValue", "false");
    this.router.navigate(['/login'])
  }
}
