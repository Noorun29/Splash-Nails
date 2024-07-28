import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BraidsPriceListComponent } from './braids-price-list/braids-price-list.component';
import { LashesPriceListComponent } from './lashes-price-list/lashes-price-list.component';
import { NailsPriceListComponent } from './nails-price-list/nails-price-list.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'appointments', component: AppointmentListComponent },
  { path: 'appointments/:id', component: AppointmentDetailsComponent },
  { path: 'book', component: BookingFormComponent },
  // { path: 'booking', component: BookingFormComponent},
  { path: 'appointment', component: AppointmentsComponent},
  { path: 'braids-price-list', component: BraidsPriceListComponent },
  { path: 'lashes-price-list', component: LashesPriceListComponent },
  { path: 'nails-price-list', component: NailsPriceListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
