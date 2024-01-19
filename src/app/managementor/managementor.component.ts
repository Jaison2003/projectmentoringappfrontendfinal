import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managementor',
  templateUrl: './managementor.component.html',
  styleUrls: ['./managementor.component.css']
})
export class ManagementorComponent implements OnInit {

  mentorname="";
  email="";
  phone="";
  technicalskill="";
  password="";
  confirmPassword="";

  constructor(private api: ApiService, private router:Router) { this.dataFromApi() }

  dataFromApi=()=>{
    this.api.viewall().subscribe(
      response=>{
        this.viewmentor=response
      }
    )
  }

  viewmentor:any=[]

  ngOnInit(): void {
  }

  read=()=>{
      let data={
      "mentorname":this.mentorname,
      "email":this.email,
      "phone":this.phone,
      "technicalskill":this.technicalskill,
      "password":this.password,
      "confirmPassword":this.confirmPassword
     
     }

    console.log(data)
    this.api.mentorreg(data).subscribe(
      (response:any)=>{
  
        console.log(response)
        alert("Submitted successfully")
        this.router.navigate(['/']);


      }
    )
    }
  }








