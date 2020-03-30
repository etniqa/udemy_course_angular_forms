import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this class has state of your authentication (true or false)
export class AuthService {
  private isAuth = false;
  constructor() { }
  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  isAuthenticated(): Promise<boolean> {
    // return Promise for simulating request to server
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
