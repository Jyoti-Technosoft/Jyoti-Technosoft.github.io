import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

const materialModule = [
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    materialModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    BrowserAnimationsModule,
    materialModule,
    ReactiveFormsModule,
    MatInputModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class SharedModule { }
