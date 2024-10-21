import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './all-posts.component';
import { AllPostsRoutingModule } from './all-posts-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AllPostsComponent],
  imports: [CommonModule, AllPostsRoutingModule, SharedModule],
})
export class AllPostsModule {}
