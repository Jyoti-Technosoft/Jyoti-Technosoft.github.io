import { Component, HostListener, OnInit } from '@angular/core';
import { Technology } from './technology';
import data from '../../../assets/data/jt-website.json';

@Component({
  selector: 'app-jt-technology',
  templateUrl: './jt-technology.component.html',
  styleUrls: ['./jt-technology.component.scss'],
})
export class JtTechnologyComponent implements OnInit {
  data: any = { ...data };
  technology!: Technology[];
  selectedTechnology!: Technology;
  mouseselectoptoin: any;

  ngOnInit() {
    this.technology = this.data?.technologyStack;
    this.selectedTechnology = this.technology[0];
  }

  onChange(selectedTechnology) {
    this.selectedTechnology = selectedTechnology;
  }
}
