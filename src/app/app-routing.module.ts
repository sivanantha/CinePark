import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieResolverService } from './core/services/movie-resolver.service';
import { MoviesListResolverService } from './core/services/movies-list-resolver.service';

const routes: Routes = [{
  path: 'movie/:id',
  loadChildren: () => import('./selected-movie-page/selected-movie-page.module').then(m => m.SelectedMoviePageModule),
  resolve: {
    selectedMovie: MovieResolverService
  }
},
{
  path: '',
  loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule),
  resolve: {
    moviesList: MoviesListResolverService
  }
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
