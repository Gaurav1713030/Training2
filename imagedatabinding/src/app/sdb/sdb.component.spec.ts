import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdbComponent } from './sdb.component';

describe('SdbComponent', () => {
  let component: SdbComponent;
  let fixture: ComponentFixture<SdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
