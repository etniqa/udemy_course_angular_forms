import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  // make navigation with .ts
  goToPostsPage() {
    // it is the same to:
    // html: <li [routerLink]="['/posts']">       // the same array of routes in args
    this.router.navigate(['/posts']);
  }
}
