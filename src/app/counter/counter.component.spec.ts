// import {CounterComponent} from './counter.component';
// import {ComponentFixture, TestBed} from '@angular/core/testing';
// import {count} from 'rxjs/operators';
// import {By} from '@angular/platform-browser';
//
// describe('CounterComponent', () => {
//   let counterComponent: CounterComponent;
//   let fixture: ComponentFixture<CounterComponent>;
//
//
//   beforeEach(() => {
//     // build tested module (has the same properties as @NgModule)
//     TestBed.configureTestingModule({
//       declarations: [CounterComponent]
//     });
//
//     // like we create with injectiong in constructor (get registered component form angular)
//     fixture = TestBed.createComponent(CounterComponent);
//     counterComponent = fixture.componentInstance;
//     // often used:
//     // fixture.debugElement;
//     // fixture.nativeElement;
//     });
//
//   it('should been created', function() {
//     expect(counterComponent).toBeDefined();
//   });
//
//   it('should render counter property on template.html', function() {
//     counterComponent.counter = 42;
//
//     // say to angular that was chan ges
//     fixture.detectChanges();
//
//     // get <h1> from template.html
//     const debugElement = fixture.debugElement.query(By.css('h1.counter'));
//     const element: HTMLElement = debugElement.nativeElement;
//
//     expect(element.textContent).toContain(counterComponent.counter.toString());
//   });
//
//   it('should add .green class to h1 if counter is even', function() {
//     const classGreen = 'green';
//     counterComponent.counter = 2;
//
//     // say to angular that was chan ges
//     fixture.detectChanges();
//
//     const h1Element: HTMLElement = fixture.debugElement.query(By.css('h1.counter')).nativeElement;
//     expect(h1Element.classList).toContain(classGreen);
//   });
//
//   it('should increment counter if increment button was clicked', function() {
//     let buttonIncrDE = fixture.debugElement.query(By.css('button#increment'));
//     // buttonIncrHTMLElement.click();
//     buttonIncrDE.triggerEventHandler('click', null);
//     fixture.detectChanges();
//
//     expect(counterComponent.counter).toBe(1);
//   });
//
// });
