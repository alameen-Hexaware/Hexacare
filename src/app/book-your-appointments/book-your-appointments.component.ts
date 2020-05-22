import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-book-your-appointments',
  templateUrl: './book-your-appointments.component.html',
  styleUrls: ['./book-your-appointments.component.css']
})
export class BookYourAppointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appointmentForm = new FormGroup({
    patientName: new FormControl(null,Validators.required),
    patientContactNumber: new FormControl(null,Validators.required),
    specialization: new FormControl(null,Validators.required),
    doctor: new FormControl(null,Validators.required),
    availableDates: new FormControl(null,Validators.required)
  });

  submit() {
    console.log("Submited");
  }
}
