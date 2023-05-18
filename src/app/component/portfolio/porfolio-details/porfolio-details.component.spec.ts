import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioDetailsComponent } from './porfolio-details.component';

describe('PorfolioDetailsComponent', () => {
  let component: PorfolioDetailsComponent;
  let fixture: ComponentFixture<PorfolioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
