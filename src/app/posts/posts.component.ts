import { Component, OnInit } from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  message: string;
  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.fetch().subscribe((posts) => {
      this.posts = posts;
    });
  }

  add(title: string) {
    const post = {title};
    this.service.create(post).subscribe(() => {
      this.posts.push(post);
    },
      err => this.message = err);
  }

  delete(id: number) {
    if (window.confirm('Are you sure')) {
      this.service.remove(id).subscribe();
    }
  }
}
