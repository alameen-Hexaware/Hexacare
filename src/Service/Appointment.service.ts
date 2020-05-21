import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Appointment } from 'src/Model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {



constructor(private http:HttpClient) { }


GetAppointmentByContact(contactNumber:string):Observable<Appointment>{
  return this.http.get<Appointment>("http://localhost:3000/Appointments?patientcontactnumber="+contactNumber)
}
GetAppointmentById(appointmentId: number) :Observable<Appointment>{
  return this.http.get<Appointment>("http://localhost:3000/Appointments/"+appointmentId)
}
}
