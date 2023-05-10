import { Component, OnDestroy, OnInit } from '@angular/core';

import { environment } from '@environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy, OnInit {
  constructor() {}

  cardContent: CardContent[] = [
    {
      cardHeader: 'Where imagination meets creativity',
      cardData:
        "Hireing ",
    },
  ];
  showClientReview : boolean | undefined ;
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

  ngOnInit(): void {
    this.showClientReview = environment.showClientReview;
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
