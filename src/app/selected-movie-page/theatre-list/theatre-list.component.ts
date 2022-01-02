import { Component, OnInit } from '@angular/core'; 
import { Theatre } from 'src/app/core/models/theatre.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.scss']
})
export class TheatreListComponent implements OnInit {
  theatres: Theatre[];

  constructor(dataService: DataService) { 
    this.theatres = dataService.getTheatres;
  }

  ngOnInit(): void {
  }


}
