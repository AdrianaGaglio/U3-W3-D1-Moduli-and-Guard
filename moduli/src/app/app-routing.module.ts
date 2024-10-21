import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckGuard } from './guards/check.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'all-posts',
    loadChildren: () =>
      import('./pages/all-posts/all-posts.module').then(
        (m) => m.AllPostsModule
      ),
  },
  {
    path: 'inactive-post',
    loadChildren: () =>
      import('./pages/inactive-post/inactive-post.module').then(
        (m) => m.InactivePostModule
      ),
    canActivate: [CheckGuard],
  },
  {
    path: 'author/:id',
    loadChildren: () =>
      import('./pages/inactive-post/inactive-post.module').then(
        (m) => m.InactivePostModule
      ),
    canActivate: [CheckGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
