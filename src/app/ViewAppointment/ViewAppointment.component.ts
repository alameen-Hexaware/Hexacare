import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/Service/Appointment.service';
import { Appointment } from 'src/Model/Appointment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ViewAppointment',
  templateUrl: './ViewAppointment.component.html',
  styleUrls: ['./ViewAppointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointmentId: number;
  appointments: Appointment;

  constructor(private actRoute:ActivatedRoute,private appointmentService:AppointmentService) { }

  ngOnInit() {
    this.appointmentId = this.actRoute.snapshot.params["id"];
    this.GetAppointment();
  }
  GetAppointment() {
    this.appointmentService.GetAppointmentById(this.appointmentId).subscribe(data => {
      this.appointments = data;
    },(err:HttpErrorResponse)=>{
      console.log("Error in Request :"+err.message)
    });
  }
}
