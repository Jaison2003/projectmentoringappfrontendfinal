import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mentoredit',
  templateUrl: './mentoredit.component.html',
  styleUrls: ['./mentoredit.component.css']
})
export class MentoreditComponent {

  studentname = '';
  mentorname = '';
  projecttopic = '';
  projecturl = '';

  
  constructor(private api: ApiService, private router:Router) { this.dataFromApi()}

  dataFromApi=()=>{
    this.api.viewsubmit().subscribe(
      response=>{
        this.viewsubmit=response
      }
    )
  }

  viewsubmit:any=[]

  ngOnInit(): void {
  }


}

