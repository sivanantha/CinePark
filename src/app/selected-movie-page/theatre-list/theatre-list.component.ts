import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theatre } from 'src/app/core/models/theatre.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.scss']
})
export class TheatreListComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  theatres: Theatre[] | undefined;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.theatres = data['selectedMovie']['theatres'] });
  }


}
