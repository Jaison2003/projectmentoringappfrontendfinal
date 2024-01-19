import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class  MentorComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  loginmentor() {
    this.apiService.loginmentor(this.loginData)
      .subscribe(response => {
        console.log('Login successful:', response);

        this.router.navigate(['/mentordashbord'])
        // Handle success, e.g., redirect to a dashboard
      }, error => {
        console.error('Login failed:', error);
        // Handle error, e.g., show an error message
      });
  }
}

