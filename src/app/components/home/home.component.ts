import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private apiService : ApiService){}
  topHeadLinesResult : any = [];

  
  ngOnInit() : void{
    this.apiService.topHeadLines().subscribe((res) =>{
      console.log(res, 'asd');
      this.topHeadLinesResult = res.articles;
    });
    this.apiService.topHeadLines().subscribe((res) =>{
      this.images = res.map((item: any) => item.urlToImage);
    })
  }

  images = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3'
  ];


  currentSlide: number = 0;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

}
