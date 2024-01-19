import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.css']
})
export class ManagestudentComponent {
  studentname = "";
  email = "";
  phone = "";
  educationqualification = "";
  password = "";
  confirmPassword = "";

  viewstudent: any[] = [];

  constructor(private api: ApiService, private router: Router) {
    this.dataFromApi();
  }

  dataFromApi = () => {
    this.api.view().subscribe(
      response => {
        this.viewstudent = response;
      }
    );
  }

  checkEmail(studentForm: any): void {
    // Implement your email validation logic here
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(this.email)) {
      studentForm.controls['email'].setErrors({ 'invalidEmailFormat': true });
    }
  }

  read = () => {
    let data = {
      "studentname": this.studentname,
      "email": this.email,
      "phone": this.phone,
      "educationqualification": this.educationqualification,
      "password": this.password,
      "confirmPassword": this.confirmPassword,
    };

    console.log(data);
    this.api.reg(data).subscribe(
      (response: any) => {
        console.log(response);
        alert("Submitted successfully");
        this.router.navigate(['/']);
      }
    );
  }
}
