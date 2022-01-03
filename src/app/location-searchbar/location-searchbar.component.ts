import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-searchbar',
  templateUrl: './location-searchbar.component.html',
  styleUrls: ['./location-searchbar.component.scss']
})
export class LocationSearchbarComponent implements OnInit {

  @Output() selectCityEvent = new EventEmitter<string>();
  close: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectCity(event: Event) {
    let selectedCity = (<HTMLInputElement>event.target).value;

    if (selectedCity) {
      this.selectCityEvent.emit(selectedCity);
      this.close = true;
    }
  }

}
