import { Component, OnInit } from '@angular/core';
import { SpecializationService } from 'src/Service/Specialization.service';
import { Specialization } from 'src/Model/Specialization';

@Component({
  selector: 'app-our-specialization',
  templateUrl: './our-specialization.component.html',
  styleUrls: ['./our-specialization.component.css']
})
export class OurSpecializationComponent implements OnInit {

  constructor(private specializationService:SpecializationService) { }

  specializationList:Specialization[];
  ngOnInit(): void {
   this.specializationList = this.specializationService.GetSpecializations();
  }

}
