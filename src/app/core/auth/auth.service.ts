import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUser: firebase.User | null | undefined = undefined;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe((user) => {
      this.authUser = user;
      router.navigate(['/']);
    });
  }

  get authenticated(): boolean {
    return this.authUser !== null;
  }

  get currentUser(): any {
    return this.authUser;
  }

  async login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string, displayName: string) {
    var userC = await this.afAuth.createUserWithEmailAndPassword(email, password);
    if (userC !== null) {
      await userC.user?.updateProfile({displayName: displayName});
      return userC;
    }
    return null;
  }

  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  async logout() {
    return this.afAuth.signOut();
  }
}
