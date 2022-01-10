import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Movie } from 'src/app/core/models/movie.model';


@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})

export class SelectedMovieComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  movie!: Movie;
  showDates: Date[] = [];
  hideTrailer = true;
  trailerUrl!: SafeResourceUrl;

  constructor(activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.movie = data['selectedMovie']['movie'] });
    this.setShowDates();
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
  }

  setShowDates(): void {
    let todayDate = new Date().getDate();
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setDate(todayDate + i)
      this.showDates.push(date);
    }
  }

  toggleTrailerWindow(event: MouseEvent) {
    this.hideTrailer = !this.hideTrailer;
    if (this.hideTrailer) {
      (<HTMLInputElement>event.target).parentElement?.nextElementSibling?.setAttribute("src", "");
    }
  }
}
