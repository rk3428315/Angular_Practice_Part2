import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutoserviceService } from './service/autoservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AutoserviceService) { }

  canActivate(): boolean {
    if (this.authService.isLogin()) {

      console.log("log Authguard");
      return true;

    } else {

      this.router.navigate(['/login']);
      return false;
    }
  }
}