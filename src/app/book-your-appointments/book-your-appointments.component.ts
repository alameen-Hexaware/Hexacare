import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SpecializationService } from 'src/Service/Specialization.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Specialization } from 'src/Model/Specialization';
import { Doctor } from 'src/Model/Doctor';
import { DoctorService } from 'src/Service/Doctor.service';
import { AppointmentService } from 'src/Service/Appointment.service';
import { Appointment } from 'src/Model/Appointment';

@Component({
  selector: 'app-book-your-appointments',
  templateUrl: './book-your-appointments.component.html',
  styleUrls: ['./book-your-appointments.component.css']
})
export class BookYourAppointmentsComponent implements OnInit {
  specializationList: Specialization[];
  doctorList: Doctor[];
  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {

    this.specializationService.GetSpecializations().subscribe(data => {
      this.specializationList = data
    }, (err: HttpErrorResponse) => {
      console.log("Error in Request :" + err.message)
      this.router.navigate(["Error"]);
    })

    this.doctorService.GetDoctors().subscribe(data => {
      this.doctorList = data
    }, (err: HttpErrorResponse) => {
      console.log("Error in Request :" + err.message)
      this.router.navigate(["Error"]);
    })
  }

  postAppointment: Appointment;
  responseModel: Appointment;
  appointmentForm = new FormGroup({
    patientName: new FormControl(null, Validators.required),
    patientContactNumber: new FormControl(null, Validators.required),
    specialization: new FormControl(null, Validators.required),
    doctor: new FormControl(null, Validators.required),
    availableDates: new FormControl(null, Validators.required)
  });


  submit() {
    this.postAppointment = {
      id: 0,
      patientname: this.appointmentForm.get("patientName").value,
      patientcontactnumber: this.appointmentForm.get("patientContactNumber").value,
      doctorname: this.appointmentForm.get("doctor").value,
      specialization: this.appointmentForm.get("specialization").value,
      appointmentdate: this.appointmentForm.get("availableDates").value
    }
    
    this.appointmentService.PostAppointment(this.postAppointment).subscribe(data => {
      this.responseModel = data;
      //this.router.navigate(["project"]);
    }, (err: HttpErrorResponse) => { console.log("Error in Request") });
    console.log("Submited");
    //this.appointmentService.PostAppointment(this.postAppointment)

  }
}
