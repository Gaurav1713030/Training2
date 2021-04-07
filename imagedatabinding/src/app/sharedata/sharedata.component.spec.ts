import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedataComponent } from './sharedata.component';

describe('SharedataComponent', () => {
  let component: SharedataComponent;
  let fixture: ComponentFixture<SharedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
