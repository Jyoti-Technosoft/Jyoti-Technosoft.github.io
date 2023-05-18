import { Component, OnInit } from '@angular/core';
import { PorfolioDetailsComponent } from '@app/component/portfolio/porfolio-details/porfolio-details.component';

import * as portfoliodata from  '@assets/data/jt-website.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private modelService: NgbModal
  ) {

  }

  ngOnInit(): void {
    this.sliderdataTitle = this.portfoliodata.portfolio;
    this.projectData = this.portfoliodata.portfolio;
    this.projectData = this.projectData?.filter((data)=> data.technology !== "All");
  }

  openDialog() {
    this.modelService.open(PorfolioDetailsComponent, {windowClass: 'modal-holder', centered: true});
  }

}
