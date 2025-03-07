import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userName: string = "";

  constructor(private auth: AuthService) {
    this.userName = auth.currentUser.displayName;
    if (this.userName == null || this.userName.length == 0)
      this.userName = auth.currentUser.email;    
  }

  logout() {
    this.auth.logout();
  }
}
