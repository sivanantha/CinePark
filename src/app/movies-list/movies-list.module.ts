import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingMoviesSlideshowComponent } from './trending-movies-slideshow/trending-movies-slideshow.component';



@NgModule({
  declarations: [
    TrendingMoviesSlideshowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrendingMoviesSlideshowComponent
  ]
})
export class MoviesListModule { }
