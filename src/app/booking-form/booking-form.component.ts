import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  selectedMonth = 'February';
  dates: { day: number; selected: boolean }[] = this.generateDates(this.selectedMonth);
  morningTimes: { time: string; selected: boolean }[] = [
    { time: '9:00 AM', selected: false },
    { time: '9:30 AM', selected: false },
    { time: '10:00 AM', selected: false }
  ];
  specialists = [
    { name: 'Alison', image: 'assets/images/alison.jpg' },
    { name: 'Cara', image: 'assets/images/cara.jpg' },
    { name: 'Tony', image: 'assets/images/tony.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMonthChange(event: any): void {
    this.dates = this.generateDates(this.selectedMonth);
  }

  generateDates(month: string): { day: number; selected: boolean }[] {
    // Generate dummy dates for the selected month
    const dates = [];
    for (let i = 1; i <= 28; i++) {
      dates.push({ day: i, selected: false });
    }
    return dates;
  }

  selectDate(date: { day: number; selected: boolean }): void {
    this.dates.forEach(d => d.selected = false);
    date.selected = true;
  }

  selectTime(timeSlot: { time: string; selected: boolean }): void {
    this.morningTimes.forEach(t => t.selected = false);
    timeSlot.selected = true;
  }

}
