import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { JtTechnologyComponent } from './jt-technology/jt-technology.component';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  DragDropModule,
];

@NgModule({
  declarations: [JtTechnologyComponent],
  imports: [CommonModule, materialModule, ReactiveFormsModule, FormsModule],
  exports: [
    materialModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    JtTechnologyComponent,
  ],
})
export class SharedModule {}
