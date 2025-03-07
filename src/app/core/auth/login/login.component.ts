import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(user => {
        this.router.navigate(['/']);
      })
      .catch(err => console.error('Fehler:', err));
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(user => console.log('Eingeloggt mit Google:', user))
      .catch(err => console.error('Fehler:', err));
  }
}
