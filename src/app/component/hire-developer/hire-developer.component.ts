import { Component, OnInit } from '@angular/core';
import data from "../../../assets/data/jt-website.json"

@Component({
  selector: 'app-hire-developer',
  templateUrl: './hire-developer.component.html',
  styleUrls: ['./hire-developer.component.scss'],
})
export class HireDeveloperComponent implements OnInit {
  data:any = {...data};
  technologyInfo: any;
  constructor() {}
  ngOnInit() {
    this.technologyInfo = this.data?.hireUs.technology[2];
    console.log(this.data?.hireUs.technology[1])
  }

}
