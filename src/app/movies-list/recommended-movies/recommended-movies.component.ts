import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/core/models/movie.model';
@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})

export class RecommendedMoviesComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  recommendedMovies!: Movie[];

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.recommendedMovies = data['moviesList']['recommendedMovies'] });
  }

}
