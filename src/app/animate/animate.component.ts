import {Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceIn, bounceOut} from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">toogle</button>
    <hr>
<!--    if trigger is from the library then you don't need to link in DOM-element with string property-->
    <div
      *ngIf="visible"
      [@bounce]
      class="rect"
    ></div>`,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', [
      // useAnimation(bounceIn) === using animation from library
      transition(':enter', useAnimation(bounceIn)),
      // you can customize library's animations using params
      transition(':leave', useAnimation(bounceOut), {
        params: {
          // animation is going 2s
          timing: 2,
          delay: 0.3
        }
      })
    ])
  ]
})
export class AnimateComponent {
  visible = true;
}
