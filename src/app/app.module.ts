import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { MainHeaderComponent } from '@app/component/main-header/main-header.component';
import { BlankComponent } from '@app/layout/blank/blank.component';
import { FullLayoutComponent } from '@app/layout/full-layout/full-layout.component';
import { SharedModule } from '@app/shared-components/shared.module';
import { FooterComponent } from '@app/component/footer/footer.component';
import { ContactUsComponent } from '@app/component/contact-us/contact-us.component';
import { ServicesComponent } from '@app/component/services/services.component';
import { HireDeveloperModule } from '@app/component/hire-developer/hire-developer.module';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    BlankComponent,
    MainHeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    HireDeveloperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
