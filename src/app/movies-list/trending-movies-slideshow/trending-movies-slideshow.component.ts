import { Component, OnInit } from '@angular/core';
import { slideshowImages } from 'src/assets/mock.data';

@Component({
  selector: 'app-trending-movies-slideshow',
  templateUrl: './trending-movies-slideshow.component.html',
  styleUrls: ['./trending-movies-slideshow.component.scss']
})
export class TrendingMoviesSlideshowComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void { 
    setTimeout(() => {
      this.nextSlide();
    }, 3000);
  }
  
  imageUrls = slideshowImages.imageUrls;
  currentSlide = 0;
  
  nextSlide() {
    if (this.currentSlide >= this.imageUrls.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    } 
    setTimeout(() => {
      this.nextSlide();
    }, 3000);
  }

}