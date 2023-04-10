import { Component, OnDestroy, OnInit } from '@angular/core';
import data from "@assets/data/jt-website.json"

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss']
})
export class WorkFlowComponent implements OnInit, OnDestroy {

  constructor() {}
  data: any = Object.assign({}, data.developmentProcess);

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }
}
