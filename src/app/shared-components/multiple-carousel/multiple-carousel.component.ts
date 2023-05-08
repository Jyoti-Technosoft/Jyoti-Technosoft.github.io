import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-multiple-carousel',
  templateUrl: './multiple-carousel.component.html',
  styleUrls: ['./multiple-carousel.component.scss'],
})
export class MultipleCarouselComponent implements OnInit {
  carousel = document.querySelector('.carousel');
  firstImg = this.carousel?.querySelectorAll('img')[0];
  arrowIcons = document.querySelectorAll('.wrapper i');
  isDragStart = false;
  isDragging = false;
  prevPageX: any;
  prevScrollLeft: any;
  positionDiff: any;

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        next = next.nextElementSibling;
      }
    });
  }
}
