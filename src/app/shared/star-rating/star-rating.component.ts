import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  maxStars: number = 5;
ngOnInit(): void {
  
}
  get filledStars(): number[] {
    const filledStarsCount = Math.round(this.rating * this.maxStars / 10); // Assuming rating is out of 10
    return new Array(filledStarsCount).fill(0);
  }

  get emptyStars(): number[] {
    const emptyStarsCount = this.maxStars - Math.round(this.rating * this.maxStars / 10);
    return new Array(emptyStarsCount).fill(0);
  }
}
