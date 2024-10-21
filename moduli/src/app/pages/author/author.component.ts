import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { iPost } from '../../interfaces/ipost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss',
})
export class AuthorComponent {
  constructor(private route: ActivatedRoute, private postSvc: PostService) {}

  posts!: iPost[];

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.posts = this.postSvc.posts.filter((post) => post.user.id === id);
  }
}
