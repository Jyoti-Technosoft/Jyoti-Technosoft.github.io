import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ],
  providers: [],
})
export class HomeModule {}
