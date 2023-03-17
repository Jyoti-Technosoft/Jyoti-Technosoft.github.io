import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    materialModule,
    ReactiveFormsModule,
  ],
  exports: [
    BrowserAnimationsModule,
    materialModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class SharedModule { }
