import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/Service/Doctor.service';
import { Doctor } from 'src/Model/Doctor';

@Component({
  selector: 'app-ViewDoctor',
  templateUrl: './ViewDoctor.component.html',
  styleUrls: ['./ViewDoctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }

  doctorList: Doctor[];
  ngOnInit() {
    this.doctorList =  this.doctorService.GetDoctors();
  }

}
