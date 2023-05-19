import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerComponent } from './career.component';
import { SharedModule } from '@app/shared-components/shared.module';

describe('CareerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerComponent ],
      imports :[SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
