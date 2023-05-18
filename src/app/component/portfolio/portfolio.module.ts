import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared-components/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from '@app/component/portfolio/portfolio.component';
import { PorfolioDetailsComponent } from './porfolio-details/porfolio-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path :':techology',
    component : PorfolioDetailsComponent
  }
];


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PortfolioComponentModule { }
