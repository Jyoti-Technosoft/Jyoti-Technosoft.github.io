import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireDeveloperComponent } from './hire-developer.component';
import { SharedModule } from '@app/shared-components/shared.module';

describe('HireDeveloperComponent', () => {
  let component: HireDeveloperComponent;
  let fixture: ComponentFixture<HireDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireDeveloperComponent ],
      imports: [SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
