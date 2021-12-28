import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedMoviePageComponent } from './selected-movie-page.component';

const routes: Routes = [{ path: '', component: SelectedMoviePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SelectedMoviePageRoutingModule { }
