import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit, OnDestroy {
  scrollSubscription!: Subscription;
  showBtn: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.buttonClick();
  }

  buttonClick() {
    this.scrollSubscription = fromEvent(document, 'scroll')
      .pipe()
      .subscribe(() => {
        this.showBtn = window.scrollY > 600;
      });
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngOnDestroy(): void {
  }
}
