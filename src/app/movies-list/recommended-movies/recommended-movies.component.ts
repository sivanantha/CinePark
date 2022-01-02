import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/services/data.service';
import { Movie } from 'src/app/core/models/movie.model';


@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {
  dataService: DataService;
  recommendedMovies!: Movie[];

  constructor(dataService: DataService) {
    this.dataService = dataService;
   }

  ngOnInit(): void {
    this.recommendedMovies = this.dataService.getRecommendedMovies;
  }

}
