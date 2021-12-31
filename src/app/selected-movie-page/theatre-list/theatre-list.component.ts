import { Component, OnInit } from '@angular/core';
import { theatres } from 'src/assets/mock.data';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.scss']
})
export class TheatreListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  theatres = theatres;
}
