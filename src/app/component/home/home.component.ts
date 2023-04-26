import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, OnInit, AfterViewInit {
  constructor(private elm: ElementRef) {}

  cardContent: CardContent[] = [
    {
      cardHeader: 'Where imagination meets creativity',
      cardData: 'Hireing ',
    },
  ];

  hireUsContent: hireUsContent[] = [
    {
      cardHeader: 'Web development',
      cardData: 'Hire Us in Web Development .',
    },
    {
      cardHeader: 'Anuglar Development',
      cardData: 'Hire Us in Web Development .',
    },
    {
      cardHeader: 'Java development',
      cardData: 'Hire Us in Web Development .',
    },
    {
      cardHeader: 'WordPress development',
      cardData: 'Hire Us in Web Development .',
    },
    {
      cardHeader: 'Laravel development',
      cardData: 'Hire Us in Web Development .',
    },
    {
      cardHeader: 'UI Desiging',
      cardData: 'Hire Us in Web Development .',
    },
  ];
  scrollSubscription!: Subscription;
  showBtn: boolean = false;

  ngOnInit(): void {}

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

  ngOnDestroy(): void {}
}
interface CardContent {
  cardHeader: string;
  cardData: string;
}
interface hireUsContent {
  cardHeader: string;
  cardData: string;
}
