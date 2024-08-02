import { Component, OnInit } from '@angular/core';
import { AppointmentService, Appointment } from '../service/appointment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe(
      (appointments) => {
        this.appointments = appointments;
      },
      (error) => {
        console.error('Error loading appointments:', error);
      }
    );
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe(
      () => {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
      },
      (error) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
