import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewDoctorComponent } from './ViewDoctor/ViewDoctor.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { OurSpecializationComponent } from './our-specialization/our-specialization.component';
import { YourAppointmentsComponent } from './your-appointments/your-appointments.component';
import { BookYourAppointmentsComponent } from './book-your-appointments/book-your-appointments.component';
import { ViewAppointmentComponent } from './ViewAppointment/ViewAppointment.component';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  { path: "", redirectTo: "Home" , pathMatch:"full" },
  { path: "Home", component: HomeComponent },
  { path: "ViewDoctor", component: ViewDoctorComponent },
  { path: "OurSpecialization", component: OurSpecializationComponent },
  { path: "YourAppointments", component: YourAppointmentsComponent },
  { path: "ViewAppointments/:id", component: ViewAppointmentComponent },
  { path: "BookYourAppointments", component: BookYourAppointmentsComponent },
  { path: "**", component: PageNotFoundComponent },
]
@NgModule({
   declarations: [
      AppComponent,
      ViewDoctorComponent,
      HomeComponent,
      PageNotFoundComponent,
      OurSpecializationComponent,
      YourAppointmentsComponent,
      BookYourAppointmentsComponent,
      ViewAppointmentComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(route),
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
