import { Component, OnInit } from '@angular/core';
import { SpecializationService } from 'src/Service/Specialization.service';
import { Specialization } from 'src/Model/Specialization';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-our-specialization',
  templateUrl: './our-specialization.component.html',
  styleUrls: ['./our-specialization.component.css']
})
export class OurSpecializationComponent implements OnInit {
  specializationList: Specialization[];
  constructor(private specializationService: SpecializationService,
    private router: Router) { }

  ngOnInit(): void {

    this.specializationService.GetSpecializations().subscribe(data => {
      this.specializationList = data
    }, (err: HttpErrorResponse) => {
      console.log("Error in Request :" + err.message)
      this.router.navigate(["Error"]);
    })
  }

}
