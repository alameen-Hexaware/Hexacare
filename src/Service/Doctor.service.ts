import { Injectable } from '@angular/core';
import { Doctor } from 'src/Model/Doctor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  GetDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>("http://localhost:3000/Doctor/")
  }
}
