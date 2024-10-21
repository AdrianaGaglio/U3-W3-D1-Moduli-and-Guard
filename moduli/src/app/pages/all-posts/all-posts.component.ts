import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss',
})
export class AllPostsComponent {
  constructor(private postSvc: PostService) {}

  posts!: iPost[];

  ngOnInit() {
    this.posts = this.postSvc.posts.slice(3, 20);
  }
}
