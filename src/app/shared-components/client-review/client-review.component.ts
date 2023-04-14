import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientReviewComponent implements OnInit {
  reviewItem: any[] = [
    { name: 'Ronaldo1' },
    { name: 'Ronaldo2' },
    { name: 'Ronaldo3' },
    { name: 'Ronaldo4' },
    { name: 'Ronaldo5' },
    { name: 'Ronaldo6' },
    { name: 'Ronaldo7' },
    { name: 'Ronaldo8' },
    { name: 'Ronaldo9' },
    { name: 'Ronaldo10' },
  ];
  @ViewChild('sliderContainer') template!: ElementRef;

  constructor(private render: Renderer2) {}

  ngOnInit() {}

  moveNext() {
    Array.from(this.template.nativeElement.children).forEach(
      (item: any, index: number) => {
        let currentclass = Number(item.className?.split('-')?.pop());
        let nextclass =
          currentclass > 0
            ? `n-${currentclass - 1}`
            : `n-${this.template.nativeElement.children.length - 1}`;
        this.render.removeClass(item, item.className);
        this.render.addClass(item, nextclass);
      }
    );
  }

  moveBack() {
    Array.from(this.template.nativeElement.children).forEach(
      (item: any, index: number) => {
        let currentclass = Number(item.className?.split('-')?.pop());
        let nextclass =
          currentclass == this.template.nativeElement.children.length - 1
            ? `n-0`
            : `n-${currentclass + 1}`;
        this.render.removeClass(item, item.className);
        this.render.addClass(item, nextclass);
      }
    );
  }
}
