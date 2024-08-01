import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    // Handle registration logic here
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/']);
  }

}
