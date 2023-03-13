import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from '@app/component/main-header/main-header.component';
import { BlankComponent } from '@app/layout/blank/blank.component';
import { FullLayoutComponent } from '@app/layout/full-layout/full-layout.component';
import { SharedModule } from '@app/shared-components/shared.module';
import { FooterComponent } from '@app/component/footer/footer.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    BlankComponent,
    MainHeaderComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
