import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private postSvc: PostService) {}

  login() {
    this.postSvc.loggedIn$.next(true);
  }

  logout() {
    this.postSvc.loggedIn$.next(false);
  }
}
