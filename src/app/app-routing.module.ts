import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [

  {path: '',component: HomeComponent, pathMatch: "full"},
  {path: 'about',component: AboutComponent},
  {path: 'categories',component: CategoriesComponent},
  {path: 'projects',component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
