import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'movie',
  loadChildren: () => import('./selected-movie-page/selected-movie-page.module').then(m => m.SelectedMoviePageModule)
},
{
  path: '',
  loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule)
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
