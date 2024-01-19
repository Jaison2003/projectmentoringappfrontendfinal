import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {

  
  studentname=""
  email=""
  phone=""
 
  educationqualification=""
  password=""
  confirmPassword=""
 







  constructor(private api: ApiService, private router:Router) { this.dataFromApi()}

  dataFromApi=()=>{
    this.api.view().subscribe(
      response=>{
        this.viewstudent=response
      }
    )
  }

  viewstudent:any=[]

  ngOnInit(): void {
  }

 

    
  }
