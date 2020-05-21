import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecializationComponent } from './our-specialization.component';

describe('OurSpecializationComponent', () => {
  let component: OurSpecializationComponent;
  let fixture: ComponentFixture<OurSpecializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSpecializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
