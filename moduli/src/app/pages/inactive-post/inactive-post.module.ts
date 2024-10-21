import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostComponent } from './inactive-post.component';
import { InactivePostRoutingModule } from './inactive-post-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InactivePostComponent],
  imports: [CommonModule, InactivePostRoutingModule, SharedModule],
})
export class InactivePostModule {}
