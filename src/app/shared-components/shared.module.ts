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
import { CarouselModule } from 'ngx-owl-carousel-o';

import { FilterPipe } from './pipes/filter/filter.pipe';
import { JtTechnologyComponent } from './jt-technology/jt-technology.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalComponent } from '@app/component/modal/modal.component';
import { DistinctvaluePipe } from './pipes/distinct-value/distinctvalue.pipe';
import { MultipleCarouselComponent } from './multiple-carousel/multiple-carousel.component';
import { DevelopmentProcessComponent } from './development-process/development-process.component';


const materialModule = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatListModule,
  MatCardModule,
  MatSelectModule,
  DragDropModule,
  NgbCarouselModule,
];

@NgModule({
  declarations: [JtTechnologyComponent, ClientReviewComponent, ModalComponent, DistinctvaluePipe, MultipleCarouselComponent, DevelopmentProcessComponent, FilterPipe],
  imports: [CommonModule, materialModule, ReactiveFormsModule, FormsModule, RecaptchaModule, RecaptchaFormsModule,CarouselModule],
  exports: [
    materialModule,
    FilterPipe,
    MultipleCarouselComponent,
    DevelopmentProcessComponent,
    ReactiveFormsModule,
    DistinctvaluePipe,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    JtTechnologyComponent,
    ClientReviewComponent,
    ModalComponent,
    CarouselModule
  ],
})
export class SharedModule {}
