import { Component } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  message :string = ""
  constructor(private reviewService:ReviewService) { }
  senddata(){
    this.reviewService.addreviwe (this.message).subscribe();
    console.log(this.message);
      }
}
