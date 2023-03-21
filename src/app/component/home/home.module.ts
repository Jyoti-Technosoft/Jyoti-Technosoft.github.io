import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared-components/shared.module';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports : [
  ],
  providers: [],
})
export class HomeModule {}
