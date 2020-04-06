import {Component} from '@angular/core';
import {animate, group, keyframes, query, sequence, state, style, transition, trigger} from '@angular/animations';
import {boxAnimation} from './app.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations
  animations: [
    // from animate/app.animation.ts
    boxAnimation
  ]
})

export class AppComponent {
  // contains string name of animation state
  boxState = 'start';
  visible = true;

  // call when animation starts
  animationStarted(event: AnimationEvent) {
    // event === object of AnimationEvent
    console.log('animation started', event);
  }

  // call when animation ends
  animationEnd(event: AnimationEvent) {
    // event === object of AnimationEvent
    console.log('animation ended', event);
  }
}
