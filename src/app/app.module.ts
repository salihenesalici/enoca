import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './components/home/home.module';
import { NewsModule } from './components/news/news.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { FooterModule } from './components/footer/footer.module';
import { AboutModule } from './components/about/about.module';
import { CategoriesModule } from './components/categories/categories.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    NewsModule,
    PaginationModule,
    FooterModule,
    AboutModule,
    CategoriesModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
