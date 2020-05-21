import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourAppointmentsComponent } from './book-your-appointments.component';

describe('BookYourAppointmentsComponent', () => {
  let component: BookYourAppointmentsComponent;
  let fixture: ComponentFixture<BookYourAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookYourAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookYourAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
