import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private router: Router,
    private log:LogService) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = false;
    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}
