import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    materialModule,
  ],
  exports: [
    BrowserAnimationsModule,
    materialModule
  ]
})
export class SharedModule { }
