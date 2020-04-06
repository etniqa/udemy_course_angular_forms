import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent } from './routing.component';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';

// as you don`t need to test native angular classes (ActivatedRoute, Router)
// you can (and need for convention) create your own

// here will be all properties and methods, which we use in real project in native Angular classes
class RouterStub {
  navigate(path: string[]) {} // we will use this instead Router.navigate
}
// here will be all properties and methods, which we use in real project in native Angular classes
class ActivatedRouteStub {
  private subject = new Subject<Params>();  // like Observable<Params>

  push(params) {
    this.subject.next(params);  // set in next of subject params
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [  // what we inject in constructor (with OUR substitute (підміна))
        {provide: Router, useClass: RouterStub}, // inject instead of Router my class RouterStub
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponent);
    // get component
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to posts if go back', function() {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    // call goBack where there is calling router.navigate(['/posts']);
    component.goBack();

    expect(spy).toHaveBeenCalledWith(['/posts']);
  });

  it('should navigate to 404 if id = 0', function() {
    // it doesn`t work
    let router = TestBed.inject(Router);
    let route = TestBed.inject(ActivatedRoute);
    let spy = spyOn(router, 'navigate');

    console.log(route);
    (route as ActivatedRouteStub).push();
    // route.push({id: '0'});
    //
    // expect(spy).toHaveBeenCalledWith(['/404']);
  });
});
