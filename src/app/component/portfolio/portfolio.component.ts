import { Component, OnInit } from '@angular/core';

import * as portfoliodata from  '@assets/data/jt-website.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfoliodata = {...portfoliodata};
  clientLogo = this.portfoliodata.clientlogos;
  sliderdataTitle: any;
  projectData:any;
  filters:any ={ 
    technology:  this.portfoliodata.portfolio[0].technology
  } ;

  ngOnInit(): void {
    this.sliderdataTitle = this.portfoliodata.portfolio;
    this.projectData = this.portfoliodata.portfolio;
    this.projectData = this.projectData?.filter((data)=> data.technology !== "All");
  }

}
