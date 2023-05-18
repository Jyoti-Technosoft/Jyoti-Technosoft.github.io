import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared-components/shared.module';

import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  },
];

@NgModule({
  declarations: [
    AboutUsComponent
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
export class AboutUsModule {}
