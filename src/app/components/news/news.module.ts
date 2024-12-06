import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports:[NewsComponent]
})
export class NewsModule { }
