import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CinePark';
  currentCity: string = '';

  selectCity(selectedCity: string) {
    this.currentCity = selectedCity;
  }
}
