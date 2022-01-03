import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trending-movies-slideshow',
  templateUrl: './trending-movies-slideshow.component.html',
  styleUrls: ['./trending-movies-slideshow.component.scss']
})

export class TrendingMoviesSlideshowComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  imageUrls!: string[];
  currentSlide = 0;
  isMoving = false;
  isSlidePrevious = false;

  constructor(activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => { this.imageUrls = data['moviesList']['slideShowImages'] });
    this.slideAuto();
  }

  slideAuto() {
    setTimeout(() => { this.slideNext(); this.slideAuto(); }, 3000);
  }

  slideNext() {
    if (!this.isMoving) {
      this.isSlidePrevious = false;
      if (this.currentSlide >= this.imageUrls.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
      this.disableInteraction();
    }
  }

  slidePrevious() {
    if (!this.isMoving) {
      this.isSlidePrevious = true;
      if (this.currentSlide <= 0) {
        this.currentSlide = this.imageUrls.length - 1;
      } else {
        this.currentSlide--;
      }
      this.disableInteraction();
    }
  }

  disableInteraction() {
    this.isMoving = true;
    setTimeout(() => { this.isMoving = false }, 500);
  }
}