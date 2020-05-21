import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Appointment } from 'src/Model/Appointment';
import { AppointmentService } from 'src/Service/Appointment.service';

@Component({
  selector: 'app-your-appointments',
  templateUrl: './your-appointments.component.html',
  styleUrls: ['./your-appointments.component.css']
})
export class YourAppointmentsComponent implements OnInit {
  responseObj: Appointment;

  constructor(private appointmentService:AppointmentService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  
  appointmentForm = new FormGroup({
    contact: new FormControl(null, Validators.required)
  });

  submit() {
    const contact = this.appointmentForm.get("contact").value;
    this.appointmentService.GetAppointmentByContact(contact).subscribe(data => {
      this.responseObj = data;
      if(this.responseObj){
        this.router.navigate(["ViewAppointments/",this.responseObj[0].id]);
      }
    },(err:HttpErrorResponse)=>{
      console.log("Error in Request :"+err.message)
      //this.router.navigate(["Error"]);
    });
    console.log("Submited");
    
  }
}

