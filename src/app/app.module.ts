import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentdashbrdComponent } from './studentdashbrd/studentdashbrd.component';
import { ProjectallottedComponent } from './projectallotted/projectallotted.component';
import { WklymarklistComponent } from './wklymarklist/wklymarklist.component';
import { ProjectdtlsComponent } from './projectdtls/projectdtls.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ManageprojectComponent } from './manageproject/manageproject.component';
import { ManagementorComponent } from './managementor/managementor.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { MentordashbordComponent } from './mentordashbord/mentordashbord.component';
// import { MentorfilterComponent } from './mentorfilter/mentorfilter.component';
import { MentorgradeingComponent } from './mentorgradeing/mentorgradeing.component';
import { MentorstudymetirialComponent } from './mentorstudymetirial/mentorstudymetirial.component';
import { MentorviewpgeComponent } from './mentorviewpge/mentorviewpge.component';
import { MentoreditComponent } from './mentoredit/mentoredit.component';
import { FormsModule } from '@angular/forms';
import { ViewmentorComponent } from './viewmentor/viewmentor.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { LoginComponent } from './login/login.component';


const myroutes=[
  {path:"student",component:StudentComponent},
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"mentor",component:MentorComponent},
  {path:"admin",component:AdminComponent},
  {path:"studentdashbrd",component:StudentdashbrdComponent},
  {path:"projectallotted",component:ProjectallottedComponent},
  {path:"wklymarklist",component:WklymarklistComponent},
  {path:"projectdtls",component:ProjectdtlsComponent},
  {path:"admindash",component:AdmindashComponent},
  {path:"manageproject",component:ManageprojectComponent},
  {path:"managestudent",component: ManagestudentComponent},
  {path:"managementor",component:ManagementorComponent}, 
  {path:"mentordashbord",component:MentordashbordComponent},
  // {path:"mentorfilter",component: MentorfilterComponent},
  {path:"mentorgradeing",component: MentorgradeingComponent},
  {path:"mentorstudymetirial",component: MentorstudymetirialComponent},
  {path:"mentorviewpge",component: MentorviewpgeComponent},
  {path:"mentoredit",component:  MentoreditComponent},
  {path:"viewmentor",component:  ViewmentorComponent},
  {path:"viewstudent",component:  ViewstudentComponent},
  {path:"login",component:  LoginComponent}





  
  
  

]
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    MentorComponent,
    AdminComponent,
    StudentdashbrdComponent,
    ProjectallottedComponent,
    WklymarklistComponent,
    ProjectdtlsComponent,
    AdmindashComponent,
    ManageprojectComponent,
    ManagementorComponent,
    ManagestudentComponent,
    MentordashbordComponent,
    // MentorfilterComponent,
    MentorgradeingComponent,
    MentorstudymetirialComponent,
    MentorviewpgeComponent,
    MentoreditComponent,
    ViewmentorComponent,
    ViewstudentComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }