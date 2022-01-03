import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<any> {
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let index: number = Number(route.paramMap.get("id"));
    return {movie: this.dataService.getRecommendedMovies[index], theatres: this.dataService.getTheatres};
  }
}
