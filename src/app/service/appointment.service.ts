import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from './Appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [
    { id: 1, date: '2024-07-25', time: '10:00 AM', customerName: 'Alice' },
    { id: 2, date: '2024-07-26', time: '11:00 AM', customerName: 'Bob' },
    // more appointments
  ];

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  bookAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.id = this.appointments.length + 1;
    this.appointments.push(appointment);
    return of(appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    this.appointments = this.appointments.filter(a => a.id !== id);
    return of();
  }
}