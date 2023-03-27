import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientReviewComponent {

  reviewItem:any[] = [10, 20, 30, 40, 50];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
