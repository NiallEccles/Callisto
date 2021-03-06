import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalButtonComponent } from './cal-button.component';

describe('ButtonComponent', () => {
  let component: CalButtonComponent;
  let fixture: ComponentFixture<CalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
