import { Component, HostListener } from '@angular/core';

import * as developmentData from '@assets/data/jt-website.json';

@Component({
  selector: 'app-development-process',
  templateUrl: './development-process.component.html',
  styleUrls: ['./development-process.component.scss'],
})
export class DevelopmentProcessComponent {
  developmentData = { ...developmentData };
  processDevelopment = this.developmentData.developmentProcess;

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    this.callbackFunc();
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight) &&
      rect.right <= (window.innerWidth)
    );
  }

  callbackFunc() {
    var items = document.querySelectorAll('.timeline li');
    for (var i = 0; i < items.length; i++) {
      if (this.isElementInViewport(items[i])) {
        if (!items[i].classList.contains('in-view')) {
          items[i].classList.add('in-view');
        }
      }
    }
  }
  //  ******
  // Note : This is used for removeing all card
  // *******
  // else if (items[i].classList.contains('in-view')) {\
  //   items[i].classList.remove('in-view');
  // }
}
