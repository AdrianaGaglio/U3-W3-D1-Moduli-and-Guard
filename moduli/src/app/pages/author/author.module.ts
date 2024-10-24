import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { AuthorRoutingModule } from './author-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule, AuthorRoutingModule, SharedModule],
})
export class AuthorModule {}
