import { Component, OnInit } from '@angular/core';
import { movies } from 'src/assets/mock.data';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.scss']
})
export class SelectedMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movie = movies.recommended[0];
}
