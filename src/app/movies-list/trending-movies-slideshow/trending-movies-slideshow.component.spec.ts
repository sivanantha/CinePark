import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingMoviesSlideshowComponent } from './trending-movies-slideshow.component';

describe('TrendingMoviesSlideshowComponent', () => {
  let component: TrendingMoviesSlideshowComponent;
  let fixture: ComponentFixture<TrendingMoviesSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingMoviesSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingMoviesSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
