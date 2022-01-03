import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListComponent } from './movies-list.component';
import { TrendingMoviesSlideshowComponent } from './trending-movies-slideshow/trending-movies-slideshow.component';
import { RecommendedMoviesComponent } from './recommended-movies/recommended-movies.component';

import { MoviesListRoutingModule } from './movies-list-routing.module';


@NgModule({
  declarations: [
    MoviesListComponent,
    TrendingMoviesSlideshowComponent,
    RecommendedMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule
  ],
  exports: [
    TrendingMoviesSlideshowComponent,
    RecommendedMoviesComponent,
  ]
})
export class MoviesListModule { }
