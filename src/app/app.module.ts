import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MoviesListModule } from './movies-list/movies-list.module';
import { LocationSearchbarComponent } from './location-searchbar/location-searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    LocationSearchbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
