import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoserviceService } from './service/autoservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthchildGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AutoserviceService) { }
  canActivateChild(): boolean {
    if (this.authService.isLogin()) {

      console.log("log Authguard");
      return true;

    } else {

      alert("Not able to access without the go to the home page!")
      return false;
    }
  }

}
