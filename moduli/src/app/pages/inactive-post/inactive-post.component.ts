import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss',
})
export class InactivePostComponent {
  constructor(private postSvc: PostService) {}

  posts!: iPost[];

  ngOnInit() {
    this.posts = this.postSvc.posts.filter((post) => !post.active);
  }
}
