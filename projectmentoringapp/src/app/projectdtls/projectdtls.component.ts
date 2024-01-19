import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Import your ApiService
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-projectdtls',
  templateUrl: './projectdtls.component.html',
  styleUrls: ['./projectdtls.component.css']
})
export class ProjectdtlsComponent {

  studentname='';
  mentorname='';
  projecttopic='';
  projecturl='';

  constructor(private api: ApiService, private router: Router) { } // Inject ApiService and Router

  read = () => {
    let data = {
      "studentname": this.studentname,
      "mentorname": this.mentorname,
      "projecttopic": this.projecttopic,
      "projecturl": this.projecturl
    };

    console.log(data);
    this.api.addprjct(data).subscribe(
      (response: any) => {
        console.log(response);
        alert("Submitted successfully");
        this.router.navigate(['/']);
      }
    );
  }
}



