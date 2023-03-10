import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './component/main-header/main-header.component';
import { BlankComponent } from './layout/blank/blank.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { SharedModule } from './shared-components/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, BlankComponent, MainHeaderComponent, FooterComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
