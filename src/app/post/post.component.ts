import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // there is all parameters (params), which we give to the route (:id)
  post: Post;
  constructor(private activeRoute: ActivatedRoute,  // for work with current route
              private postsService: PostsService,
              private router: Router               // Router === for navigate (change routes)
   ) {}

  ngOnInit(): void {
    // just print params (ActivatedRoute.params is stream$)
    this.activeRoute.params.subscribe((params: Params) => {
      console.log('params ', params);
      this.post = this.postsService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}
