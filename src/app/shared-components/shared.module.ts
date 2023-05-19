import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { JtTechnologyComponent } from './jt-technology/jt-technology.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { DistinctvaluePipe } from './pipes/distinct-value/distinctvalue.pipe';
import { MultipleCarouselComponent } from './multiple-carousel/multiple-carousel.component';
import { DevelopmentProcessComponent } from './development-process/development-process.component';
import { RouterModule } from '@angular/router';

const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  DragDropModule,
  NgbCarouselModule,
];

@NgModule({
  declarations: [
    JtTechnologyComponent,
    ClientReviewComponent,
    FilterPipe,
    DistinctvaluePipe,
    MultipleCarouselComponent,
    DevelopmentProcessComponent,
  ],
  imports: [
    CommonModule,
    materialModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterTestingModule,
    RouterModule.forRoot([]),
  ],
  exports: [
    materialModule,
    CarouselModule,
    MultipleCarouselComponent,
    DevelopmentProcessComponent,
    ReactiveFormsModule,
    FilterPipe,
    DistinctvaluePipe,
    BrowserAnimationsModule,
    NgbModule,
    RouterTestingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    JtTechnologyComponent,
    ClientReviewComponent,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {}
