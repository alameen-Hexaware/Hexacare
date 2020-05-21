import { Injectable } from '@angular/core';
import { Specialization } from 'src/Model/Specialization';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

constructor() { }
GetSpecializations(): Specialization[] {
  return [
    { Id: 1, Name: "General" },
  ]
}
}
