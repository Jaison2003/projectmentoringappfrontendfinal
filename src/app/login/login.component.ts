import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'; // Import your API service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  log(): void {
    if (this.credentials.email && this.credentials.password) {
      this.apiService.log(this.credentials).subscribe(
        (response: any) => {
          console.log("Login response:", response);
          if (response.success) {
            this.router.navigate([response.redirectPath]);
            alert("Login Successfully");
          } else {
            console.error("Login failed", response.message);
            alert("Invalid credentials. Login failed.");
          }
        },
        (error) => {
          console.error("Login failed", error);
          alert("Invalid credentials. Login failed.");
        }
      );
    } else {
      alert('Please enter valid email and password.');
    }
  }
}
