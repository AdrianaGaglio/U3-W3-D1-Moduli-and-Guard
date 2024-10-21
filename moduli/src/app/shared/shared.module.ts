import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TruncatePipe } from './truncate.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, TruncatePipe],
  imports: [CommonModule, RouterModule],
  exports: [CardComponent, TruncatePipe],
})
export class SharedModule {}
