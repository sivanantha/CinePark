import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/core/services/data.service';
import { Movie } from 'src/app/core/models/movie.model';


@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  dataService: DataService;
  movie!: Movie;

  constructor(dataService: DataService, activatedRoute: ActivatedRoute) {
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.movie = this.getSelectedMovie();
  }

  getSelectedMovie(): Movie {
    let index: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    return this.dataService.getRecommendedMovies[index];
  }


  
}
