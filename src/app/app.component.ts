import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  status = false;
  constructor(private auth: AuthService) {
  }

  changeStatus() {
    this.auth.isAuthenticated().then(result => {
      // for finishing stream$ you just need don`t write return or resolve
      this.status = result;
    });
  }

  loginClick() {
    this.auth.login();
    this.changeStatus();
    console.log('in app login ' + this.status);
  }

  logoutClick() {
    this.auth.logout();
    this.changeStatus();
    console.log('in app logout ' + this.status);

  }
}
