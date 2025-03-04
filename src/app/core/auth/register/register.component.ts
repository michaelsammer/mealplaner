import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password)
      .then(user => console.log('Eingeloggt:', user))
      .catch(err => console.error('Fehler:', err));
  }
}
