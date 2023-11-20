import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  reviews: any[] = [];
  interval: any;
  activeSlideIndex = 0;
  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe({
      next: (response) => {
        this.reviews = response;
      },
    });
    this.startAutoplay();
  }

  startAutoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }
  slideTo(index: number) {
    this.activeSlideIndex = index;
  }

  prevSlide() {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.reviews.length;
  }

}
