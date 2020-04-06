import {Component} from "@angular/core";
import {ComponentFixture} from '@angular/core/testing';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
