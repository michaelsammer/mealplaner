import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  displayName: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.email, this.password, this.displayName)
      .then(user => {
        this.router.navigate(['/']);
      })
      .catch(err => console.error('Fehler:', err));
  }
}
