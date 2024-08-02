import { Component, OnInit } from '@angular/core';
import { Appointment, AppointmentService } from '../service/appointment.service';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  selectedMonthIndex = this.months.indexOf('August');
  dates: { day: number; selected: boolean }[] = [];
  
  morningTimes: { time: string; selected: boolean }[] = [
    { time: '9:00 AM', selected: false },
    { time: '10:00 AM', selected: false },
    { time: '11:00 AM', selected: false },
  ];

  afternoonTimes: { time: string; selected: boolean }[] = [
    { time: '1:00 PM', selected: false },
    { time: '2:00 PM', selected: false },
    { time: '3:00 PM', selected: false },
  ];

  selectedPeriod: 'morning' | 'afternoon' = 'morning';

  specialists = [
    { name: 'Amanda', image: './../../assets/images/beautician.jpg' },
    { name: 'Teboo', image: './../../assets/images/beautician 1.jpg' },
    { name: 'Lesego', image: './../../assets/images/beautician 2.jpg' }
  ];

  dropdownVisible = false;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.updateDates(); // Initialize dates when the component is loaded
  }

  previousMonth(): void {
    if (this.selectedMonthIndex > 0) {
      this.selectedMonthIndex--;
    } else {
      this.selectedMonthIndex = this.months.length - 1; // Go to December if current month is January
    }
    this.updateDates(); // Update dates based on the new selected month
  }

  nextMonth(): void {
    if (this.selectedMonthIndex < this.months.length - 1) {
      this.selectedMonthIndex++;
    } else {
      this.selectedMonthIndex = 0; // Go to January if current month is December
    }
    this.updateDates(); // Update dates based on the new selected month
  }

  updateDates(): void {
    this.dates = this.generateDates(this.months[this.selectedMonthIndex]);
  }

  generateDates(month: string): { day: number; selected: boolean }[] {
    const daysInMonth: { [key: string]: number } = {
      January: 31,
      February: 29, // Assuming leap year for February
      March: 31,
      April: 30,
      May: 31,
      June: 30,
      July: 31,
      August: 31,
      September: 30,
      October: 31,
      November: 30,
      December: 31
    };

    const numberOfDays = daysInMonth[month] || 28; // Default to 28 if month is invalid

    const dates = [];
    for (let i = 1; i <= numberOfDays; i++) {
      dates.push({ day: i, selected: false });
    }

    return dates;
  }

  selectDate(date: { day: number; selected: boolean }): void {
    this.dates.forEach(d => d.selected = false);
    date.selected = true;
  }

  selectTime(timeSlot: { time: string; selected: boolean }): void {
    const timeSlots = this.selectedPeriod === 'morning' ? this.morningTimes : this.afternoonTimes;
    timeSlots.forEach(t => t.selected = false);
    timeSlot.selected = true;
  }

  selectPeriod(period: 'morning' | 'afternoon'): void {
    this.selectedPeriod = period;
    // Optionally clear the selected time slot when switching periods
    const timeSlots = period === 'morning' ? this.morningTimes : this.afternoonTimes;
    timeSlots.forEach(t => t.selected = false);
  }

  bookAppointment(): void {
    const selectedDate = this.dates.find(date => date.selected)?.day;
    const selectedTime = this.selectedPeriod === 'morning'
      ? this.morningTimes.find(time => time.selected)?.time
      : this.afternoonTimes.find(time => time.selected)?.time;

    if (selectedDate && selectedTime) {
      const month = this.selectedMonthIndex + 1;
      const day = selectedDate < 10 ? `0${selectedDate}` : selectedDate;
      const time = selectedTime.split(' ')[0];
      const timeWithSeconds = time.includes(':') ? time + ':00' : time + ':00:00';
      const formattedTime = selectedTime.includes('AM') ? timeWithSeconds : `${Number(time.split(':')[0]) + 12}:${time.split(':')[1]}:00`;

      const appointment: Appointment = {
        id: 0, // ID will be handled by the backend
        userDet: 'John Doe', // This should come from user input or session
        email: 'john.doe@example.com', // This should come from user input
        contactNo: '+1234567890', // This should come from user input
        description: 'Consultation regarding new project', // User-provided description
        appointmentDate: `2024-${month < 10 ? '0' + month : month}-${day}T${formattedTime}Z` // Format appropriately
      };

      this.appointmentService.createAppointment(appointment).subscribe(response => {
        console.log('Appointment created:', response);
        alert('Appointment successfully booked!');
      }, error => {
        console.error('Error creating appointment:', error);
        alert('Failed to book appointment.');
      });
    } else {
      alert('Please select a date and time.');
    }
  }
}
