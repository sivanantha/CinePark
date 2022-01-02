import { Injectable } from '@angular/core';

import * as data from '../../../assets/mock.data.json';
import { Movie } from '../models/movie.model';
import { Theatre } from '../models/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  get getRecommendedMovies(): Movie[] {
    return (data as any).default.movies.recommended;
  }

  get getTheatres(): Theatre[] {
    return (data as any).default.theatres;
  }
  
  get getSlideShowImages(): string[] {
    return (data as any).default.slideShowImages;
  }

}