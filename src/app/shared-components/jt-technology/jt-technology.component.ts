import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-jt-technology',
  templateUrl: './jt-technology.component.html',
  styleUrls: ['./jt-technology.component.scss'],
})
export class JtTechnologyComponent implements OnInit {
  technology!: Technology[];
  selectedTechnology!: Technology;

  ngOnInit() {
    this.technology = [
      {
        id: 'frontend',
        label: 'FRONTEND',
        lang: [
          {
            label: 'D3',
            imgSrc: 'assets/images/D3.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Angular',
            imgSrc: 'assets/images/Angular.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'React',
            imgSrc: 'assets/images/React.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'GWT',
            imgSrc: 'assets/images/GWT.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'JAVA',
            imgSrc: 'assets/images/JA012.png',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'DHTML',
            imgSrc: 'assets/images/html02.png',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
        ],
      },
      {
        id: 'backend',
        label: 'BACKEND',
        lang: [
          {
            label: 'JAVA/J2EE',
            imgSrc: 'assets/images/java.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Node JS',
            imgSrc: 'assets/images/nodejs.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'LARAVEL',
            imgSrc: 'assets/images/Laravel.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'SPRING',
            imgSrc: 'assets/images/spring.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
        ],
      },
      {
        id: 'database',
        label: 'DATABASE',
        lang: [
          {
            label: 'MySQL',
            imgSrc: 'assets/images/mysql.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Influx',
            imgSrc: 'assets/images/influx.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Postgress sql',
            imgSrc: 'assets/images/postgress-sql.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'MongoDB',
            imgSrc: 'assets/images/mongoDB.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
        ],
      },
      {
        id: 'mobile',
        label: 'MOBILE',
        lang: [
          {
            label: 'React Native',
            imgSrc: 'assets/images/React.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
        ],
      },
    ];

    this.selectedTechnology = this.technology[0];
  }

  onChange(selectedTechnology) {
    this.selectedTechnology = selectedTechnology;
  }
}
