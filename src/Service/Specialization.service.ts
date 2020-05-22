import { Injectable } from '@angular/core';
import { Specialization } from 'src/Model/Specialization';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(private http: HttpClient) { }

  GetSpecializations(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>("http://localhost:3000/Specialization/")
  }
}
