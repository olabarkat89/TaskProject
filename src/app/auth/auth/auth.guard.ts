import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( public router: Router) { }

  canActivate(): boolean {
    
    if (localStorage.getItem('isUserLoggedIn') == null) {
        this.router.navigate(['/login']);
        return false;
    }
    else if (localStorage.getItem('isUserLoggedIn') === 'false') {
      this.router.navigate(['/login']);
      return false;
  }
    return true;
}
}
