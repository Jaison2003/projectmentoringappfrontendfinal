import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Import your ApiService
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-mentorgradeing',
  templateUrl: './mentorgradeing.component.html',
  styleUrls: ['./mentorgradeing.component.css']
})
export class MentorgradeingComponent {

  studentname = '';
  mentor = '';
  projecttopic = '';
  markscored = '';
  feedback='';

  constructor(private api: ApiService, private router: Router) { } // Inject ApiService and Router

  read = () => {
    let data = {
      "studentname": this.studentname,
      "mentor": this.mentor,
      "projecttopic": this.projecttopic,
      "markscored": this.markscored,
      "feedback":this.feedback
    };

    console.log(data);
    this.api.add(data).subscribe(
      (response: any) => {
        console.log(response);
        alert("Submitted successfully");
        this.router.navigate(['/']);
      }
    );
  }
}
