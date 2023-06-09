import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleCarouselComponent } from './multiple-carousel.component';
import { SharedModule } from '../shared.module';

describe('MultipleCarouselComponent', () => {
  let component: MultipleCarouselComponent;
  let fixture: ComponentFixture<MultipleCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleCarouselComponent ],
      imports:[SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
