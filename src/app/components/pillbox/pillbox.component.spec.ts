import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillboxComponent } from './pillbox.component';

describe('PillboxComponent', () => {
  let component: PillboxComponent;
  let fixture: ComponentFixture<PillboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
