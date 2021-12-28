import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MoviesListModule } from './movies-list/movies-list.module';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { TheatreListComponent } from './theatre-list/theatre-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectedMovieComponent,
    TheatreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MoviesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
