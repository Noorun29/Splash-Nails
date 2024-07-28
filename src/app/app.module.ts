import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BraidsPriceListComponent } from './braids-price-list/braids-price-list.component';
import { LashesPriceListComponent } from './lashes-price-list/lashes-price-list.component';
import { NailsPriceListComponent } from './nails-price-list/nails-price-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent,
    BookingFormComponent,
    HomePageComponent,
    NavBarComponent,
    BraidsPriceListComponent,
    LashesPriceListComponent,
    NailsPriceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
