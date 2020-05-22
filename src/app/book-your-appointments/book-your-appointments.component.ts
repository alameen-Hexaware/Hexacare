import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { SpecializationService } from 'src/Service/Specialization.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Specialization } from 'src/Model/Specialization';
import { Doctor } from 'src/Model/Doctor';
import { DoctorService } from 'src/Service/Doctor.service';

@Component({
  selector: 'app-book-your-appointments',
  templateUrl: './book-your-appointments.component.html',
  styleUrls: ['./book-your-appointments.component.css']
})
export class BookYourAppointmentsComponent implements OnInit {
  specializationList: Specialization[];
  doctorList: Doctor[];
  constructor(private doctorService:DoctorService,
    private specializationService: SpecializationService,
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
