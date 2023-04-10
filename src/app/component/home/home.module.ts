import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared-components/shared.module';



import { HomeComponent } from './home.component';
import { WorkFlowComponent } from '@app/work-flow/work-flow.component';

WorkFlowComponent
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    WorkFlowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports : [
  ],
  providers: [],
})
export class HomeModule {}
