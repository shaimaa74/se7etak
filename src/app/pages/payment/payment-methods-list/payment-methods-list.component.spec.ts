import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsListComponent } from './payment-methods-list.component';

describe('PaymentMethodsListComponent', () => {
  let component: PaymentMethodsListComponent;
  let fixture: ComponentFixture<PaymentMethodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
