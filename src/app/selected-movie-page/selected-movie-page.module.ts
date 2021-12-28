import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { TheatreListComponent } from './theatre-list/theatre-list.component';



@NgModule({
  declarations: [
    SelectedMovieComponent,
    TheatreListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectedMoviePageModule { }
