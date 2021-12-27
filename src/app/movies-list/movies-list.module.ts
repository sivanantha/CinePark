import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingMoviesSlideshowComponent } from './trending-movies-slideshow/trending-movies-slideshow.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';



@NgModule({
  declarations: [
    TrendingMoviesSlideshowComponent,
    RecommendedMoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrendingMoviesSlideshowComponent,
    RecommendedMoviesComponent
  ]
})
export class MoviesListModule { }
