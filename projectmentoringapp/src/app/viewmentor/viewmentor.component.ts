import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewmentor',
  templateUrl: './viewmentor.component.html',
  styleUrls: ['./viewmentor.component.css']
})
export class ViewmentorComponent implements OnInit{





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








