import { Injectable } from '@angular/core';
import { Doctor } from 'src/Model/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

constructor() { }
GetDoctors(): Doctor[] {
  return [
    { Id: 1, Name: "Raja", Email: "Raja@Apallo.com",Phone:"9874567823",Specialization:"Gendral" },
  ]
}
}
