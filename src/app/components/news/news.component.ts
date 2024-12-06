import { map } from 'rxjs';
import { ApiService } from './../../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  posts: any[] = [];
  topHeadLinesResult : any = [];
  
  currrentPage = 1;
  itemPerPage = 5;
  constructor(private apiService : ApiService){}

  ngOnInit() : void{
    this.apiService.topHeadLines().subscribe((res) =>{
      console.log(res, 'asd');
      this.topHeadLinesResult = res.articles;
    })
  }

  changePage(page:number){
    this.currrentPage = page;
  }

  get paginated() {
    const start = (this.currrentPage - 1) * this.itemPerPage;
    const end = start + this.itemPerPage;
  
    return this.apiService.topHeadLines().pipe(
      map((res) => res.slice(start, end))
    );
  }
}
