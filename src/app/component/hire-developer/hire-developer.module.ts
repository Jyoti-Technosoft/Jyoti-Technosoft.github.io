import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@app/shared-components/shared.module';
import { HireDeveloperComponent } from '@app/component/hire-developer/hire-developer.component';

const routes: Routes = [
  {
    path: '',
    component: HireDeveloperComponent,
  },
];


@NgModule({
  declarations: [
    HireDeveloperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HireDeveloperModule { }
