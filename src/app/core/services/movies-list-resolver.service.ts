import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesListResolverService implements Resolve<any> {
  dataService: DataService;

  constructor(dataService: DataService) { 
    this.dataService = dataService;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return {recommendedMovies: this.dataService.getRecommendedMovies, slideShowImages: this.dataService.getSlideShowImages};
  }
}
