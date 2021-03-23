import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGetComponent } from './car-get.component';

describe('CarApiComponent', () => {
  let component: CarGetComponent;
  let fixture: ComponentFixture<CarGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
