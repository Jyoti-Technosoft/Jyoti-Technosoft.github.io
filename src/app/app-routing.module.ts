import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { BlankComponent } from './layout/blank/blank.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: '', redirectTo: "home", pathMatch: "full" },
      { path: 'home', component: BlankComponent }, 
      { path: 'about', component: BlankComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
