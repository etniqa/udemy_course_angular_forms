import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {EMPTY, Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('posts component', () => {
  let fixture: ComponentFixture<PostsComponent>;
  let postsComponent: PostsComponent;
  let service: PostsService;
  beforeEach(() => {
    // analog of @NgModule
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],  // for injection in PostsComponent
      imports: [HttpClientModule] // for injection in PostsService
    });

    fixture = TestBed.createComponent(PostsComponent);
    postsComponent = fixture.componentInstance;
    // inject element (PostsService)
    service = TestBed.inject(PostsService); // injection Posts Service
  });

  it('should fetch posts in ngOnInit', function() {
    const arr = [1, 2, 3];
    const spyFetchInService = spyOn(service, 'fetch').and.returnValue(of(arr));
    fixture.detectChanges();
    expect(postsComponent.posts).toEqual(arr);
  });

});
