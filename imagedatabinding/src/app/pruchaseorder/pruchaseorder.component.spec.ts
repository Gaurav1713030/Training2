import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruchaseorderComponent } from './pruchaseorder.component';

describe('PruchaseorderComponent', () => {
  let component: PruchaseorderComponent;
  let fixture: ComponentFixture<PruchaseorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruchaseorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
