import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appointment {
  id: number;
  userDet: string;
  email: string;
  contactNo: string;
  description: string;
  appointmentDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/v1/appointment';

  constructor(private http: HttpClient) {}

  // Create a new appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Appointment>(this.apiUrl, appointment, { headers });
  }

  // Fetch all appointments
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  // Fetch a single appointment by ID
  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/${id}`);
  }

  // Update an existing appointment
  updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Appointment>(`${this.apiUrl}/${id}`, appointment, { headers });
  }

  // Delete an appointment by ID
  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
