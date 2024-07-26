import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/:id', component: AppointmentDetailsComponent },
  { path: 'book', component: BookingFormComponent },
  { path: 'booking', component: BookingFormComponent},
  { path: 'appointment', component: AppointmentsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
