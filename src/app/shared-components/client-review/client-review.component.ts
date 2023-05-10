import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import * as reviewData from '@assets/data/jt-website.json';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientReviewComponent implements OnInit {
  reviewData = { ...reviewData };
  reviewItem: any = this.reviewData.clientReview;
  @ViewChild('sliderContainer') template!: ElementRef;

  constructor(private render: Renderer2, private scroller: ViewportScroller) {}

  ngOnInit() {}

  moveNext() {
    Array.from(this.template.nativeElement.children).forEach(
      (item: any, index: number) => {
        let allclasses = item.className.split(' ');
        allclasses = allclasses.filter((items) => items != 'ng-star-inserted');
        let currentclass = Number(allclasses[0]?.split('-')?.pop());
        let nextclass =
          currentclass > 0
            ? `n-${currentclass - 1}`
            : `n-${this.template.nativeElement.children.length - 1}`;
        this.render.removeClass(item, allclasses[0]);
        this.render.addClass(item, nextclass);
      }
    );
  }

  moveBack() {
    Array.from(this.template.nativeElement.children).forEach(
      (item: any, index: number) => {
        let allclasses = item.className.split(' ');
        allclasses = allclasses.filter((items) => items != 'ng-star-inserted');
        let currentclass = Number(allclasses[0]?.split('-')?.pop());
        let nextclass =
          currentclass == this.template.nativeElement.children.length - 1
            ? `n-0`
            : `n-${currentclass + 1}`;
        this.render.removeClass(item, allclasses[0]);
        this.render.addClass(item, nextclass);
      }
    );
  }
}
