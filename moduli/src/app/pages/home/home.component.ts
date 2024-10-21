import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private postSvc: PostService) {}

  posts!: iPost[];
  post!: iPost;

  ngOnInit() {
    this.posts = this.postSvc.posts;
    let found = this.postSvc.posts.find((post) => post.active);
    if (found) this.post = found;
  }
}
