import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-jt-technology',
  templateUrl: './jt-technology.component.html',
  styleUrls: ['./jt-technology.component.scss'],
})
export class JtTechnologyComponent implements OnInit {
  technology!: Technology[];
  selectedTechnology!:Technology;

  ngOnInit() {
    this.technology = [
      {
        id: 'frontend',
        label: 'FRONTEND',
        lang: [
          {
            label: 'D3',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/D3.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Angular',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Angular.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'React',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/React.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'GWT',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/GWT.svg',
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
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Java.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Node JS',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Node-js-Express.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'LARAVEL',
            imgSrc: 'https://www.narolainfotech.com/wp-content/uploads/technology_stack/Laravel.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'SPRING',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Spring.svg',
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
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/mysql.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Influx',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/influx.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'Postgress sql',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/postgress-sql.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'MongoDB',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/mongoDB.svg',
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
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/React.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
        ],
      },
    ];

    this.selectedTechnology =  this.technology[0];
  }
  

  onChange(selectedTechnology) {
    this.selectedTechnology = selectedTechnology;
  }
}
