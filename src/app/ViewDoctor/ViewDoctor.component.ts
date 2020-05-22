import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/Service/Doctor.service';
import { Doctor } from 'src/Model/Doctor';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ViewDoctor',
  templateUrl: './ViewDoctor.component.html',
  styleUrls: ['./ViewDoctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService,
    private router: Router) { }

  doctorList: Doctor[];
  ngOnInit() {
    this.doctorService.GetDoctors().subscribe(data => {
      this.doctorList = data
    }, (err: HttpErrorResponse) => {
      console.log("Error in Request :" + err.message)
      this.router.navigate(["Error"]);
    })
  }

}
