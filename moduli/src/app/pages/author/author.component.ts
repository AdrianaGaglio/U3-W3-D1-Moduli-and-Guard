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
  id!: number;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngDoCheck() {
    console.log(this.id);
  }
}
