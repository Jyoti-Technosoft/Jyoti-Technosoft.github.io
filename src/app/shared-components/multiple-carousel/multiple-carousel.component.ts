import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-multiple-carousel',
  templateUrl: './multiple-carousel.component.html',
  styleUrls: ['./multiple-carousel.component.scss'],
})
export class MultipleCarouselComponent implements OnInit {

  @Input('src') src: any[] | undefined;
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay:true,
    lazyLoad: true,
    dots: false,
    freeDrag:true,
    responsive: {
      0: {
       items: 1
     },
      480: {
       items: 2 
     },
     600: {
       items : 3
     },
     800 : {
      items : 4
     },
      940: {
       items: 5
     }
    },
  }

  constructor() {}
  ngOnInit(): void {
  }
}
