import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wklymarklist',
  templateUrl: './wklymarklist.component.html',
  styleUrls: ['./wklymarklist.component.css']
})
export class WklymarklistComponent {

  
  studentname = '';
  mentor = '';
  projecttopic = '';
  markscored = '';
  feedback='';








  constructor(private api: ApiService, private router:Router) { this.dataFromApi()}

  dataFromApi=()=>{
    this.api.viewgrade().subscribe(
      response=>{
        this.viewgrade=response
      }
    )
  }

  viewgrade:any=[]

  ngOnInit(): void {
  }

 

    
  }
