import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authSrvc: AuthService, private router:Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.authSrvc.currentUser;
    
    if (user)
      return true;

    console.log("Not authentificated");
    this.router.navigate(['/login']);
    return false;
  }

}

