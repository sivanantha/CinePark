import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CinePark';
  currentCity: string = '';

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  selectCity(selectedCity: string) {
    this.currentCity = selectedCity;
  }
}
