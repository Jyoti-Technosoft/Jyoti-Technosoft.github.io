import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-jt-technology',
  templateUrl: './jt-technology.component.html',
  styleUrls: ['./jt-technology.component.scss'],
})
export class JtTechnologyComponent implements OnInit {
  technology!: Technology[];
  selectedTechnology!:any;

  ngOnInit() {
    this.technology = [
      {
        id: 'frontend',
        label: 'FRONTEND',
        lang: [
          {
            label: 'Angular',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/D3.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'React',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Angular.svg',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
          {
            label: 'GWT',
            imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Jquery.svg',
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
            label: 'Angular',
            imgSrc: '',
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
            label: 'Angular',
            imgSrc: '',
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
            label: 'Angular',
            imgSrc: '',
            id: '',
            tooltip: '',
            referenceLink: '',
          },
        ],
      },
    ];

    this.selectedTechnology =  {
      id: 'frontend',
      label: 'FRONTEND',
      lang: [
        {
          label: 'Angular',
          imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/D3.svg',
          id: '',
          tooltip: '',
          referenceLink: '',
        },
        {
          label: 'React',
          imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Angular.svg',
          id: '',
          tooltip: '',
          referenceLink: '',
        },
        {
          label: 'GWT',
          imgSrc: 'https://webosmotic.com/wp-content/uploads/2022/06/Jquery.svg',
          id: '',
          tooltip: '',
          referenceLink: '',
        },
      ],
    }
  }
  

  onChange(selectedTechnology) {
    this.selectedTechnology = selectedTechnology;
  }
}
