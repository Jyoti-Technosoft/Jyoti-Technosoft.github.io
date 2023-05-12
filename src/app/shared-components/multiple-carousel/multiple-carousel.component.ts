import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-multiple-carousel',
  templateUrl: './multiple-carousel.component.html',
  styleUrls: ['./multiple-carousel.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class MultipleCarouselComponent implements OnInit {

  @Input('src') src: any[] | undefined;
  @Input('isCareer') isCareer: boolean = false;

  @Output('emitValueOnClick') emitValueOnClick = new EventEmitter<string>();
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay:true,
    lazyLoad: true,
    dots: true,
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
    }
  }

  emitOnClick(value: string) {
    this.emitValueOnClick.emit(value);
  }

  constructor() {}
  ngOnInit(): void {
  }
}
