import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedMoviePageRoutingModule } from './selected-movie-page-routing.module';
import { SelectedMoviePageComponent } from './selected-movie-page.component';
import { SelectedMovieComponent } from './selected-movie-details/selected-movie.component';
import { TheatreListComponent } from './theatre-list/theatre-list.component';


@NgModule({
  declarations: [
    SelectedMoviePageComponent,
    SelectedMovieComponent,
    TheatreListComponent
  ],
  imports: [
    CommonModule,
    SelectedMoviePageRoutingModule
  ]
})
export class SelectedMoviePageModule { }
