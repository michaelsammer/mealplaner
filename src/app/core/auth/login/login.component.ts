import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(user => console.log('Eingeloggt:', user))
      .catch(err => console.error('Fehler:', err));
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(user => console.log('Eingeloggt mit Google:', user))
      .catch(err => console.error('Fehler:', err));
  }
}
