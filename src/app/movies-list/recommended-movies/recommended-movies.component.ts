import { Component, OnInit } from '@angular/core';
import { movies } from 'src/assets/mock.data';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recommendedMovies = movies.recommended;  
}
