import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ClientReviewComponent implements OnInit, AfterContentInit  {
  reviewItem: any[] = [1,2,3,4,5];
  cardPerPage: number = 2;
  currentIndex: number = 0;
  reviewPage: number = 0;
  counter = new Array();

  constructor() {}

  ngOnInit() {
    this.getRowforReviewCard();
  }

  ngAfterContentInit () {
    this.onResize();
  }

  getRowforReviewCard() {
    this.counter = new Array(
      Math.ceil(Number(this.reviewItem?.length / this.cardPerPage))
    );
  }

  onSlide(event: any) {
    this.currentIndex = event.current;
  }

  @HostListener('window:resize') onResize() {
    let width = window.innerWidth;
    switch (true) {
      case width < 980:
        this.cardPerPage = 1;
        break;
      default:
        this.cardPerPage = 2;
        break;
    }
    this.getRowforReviewCard();
  }
}
