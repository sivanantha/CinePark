import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/core/models/movie.model';


@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})

export class SelectedMovieComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  movie!: Movie;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.movie = data['selectedMovie']['movie'] });
  }
}
