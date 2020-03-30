import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  showId = false;
  // tslint:disable-next-line:variable-name
  constructor(private _postsService: PostsService,
              private route: ActivatedRoute,
              private router: Router) {}

  get postsService(): PostsService {
    return this._postsService;
  }
  set postsService(value: PostsService) {
    this._postsService = value;
  }

  ngOnInit(): void {
    // get query params form ActivatedRoute
    this.route.queryParams.subscribe((queryParams) => {
      this.showId = !!queryParams.showId;
    });
    // get fragment from ActivatedRoute
    this.route.fragment.subscribe(fragment => {
      // console.log(fragment);
    });
  }

  showIdAndAddFragmentProgram() {
    this.router.navigate(['/posts'], {
      // add queryParams (it is going after ?: http://localhost:4200/posts?showId=true)
      queryParams: {
        showId: true
      },
      // add fragment (like an anchor in html: http://localhost:4200/posts?showId=true#fragment)
      fragment: 'fragment'
    });
  }
}
