import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../service/Appointment';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments!: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments()
      .subscribe(appointments => this.appointments = appointments);
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id)
      .subscribe(() => {
        this.appointments = this.appointments.filter(a => a.id !== id);
      });
  }
}

