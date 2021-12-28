import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesListModule } from './movies-list/movies-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
