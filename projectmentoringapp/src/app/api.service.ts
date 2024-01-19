import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3300/project';  // Update the base URL according to your server

  private loginUrl = 'http://localhost:3000/login';  // Update the base URL according to your server


  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }

  log(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials);
  }
  reg=(data:any)=>{

    return this.http.post("http://localhost:3500/add",data)
  }

  add=(data:any)=>{

    return this.http.post("http://localhost:5700/add",data)
  }

  addprjct=(data:any)=>{

    return this.http.post("http://localhost:5500/add",data)
  }
  mentorreg=(data:any)=>{

    return this.http.post("http://localhost:3700/add",data)
  }

  loginStudent(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:4000/studentlogin', loginData);
  }

  loginmentor(loginData: { email: string; password: string }): Observable<any> {
    return this.http.post('http://localhost:3200/mentorlogin', loginData);
  }
  view(): Observable<any> {
    return this.http.get("http://localhost:3500/viewall");
  }

  viewall(): Observable<any> {
    return this.http.get("http://localhost:3700/viewall");
  }
  viewgrade(): Observable<any> {
    return this.http.get("http://localhost:5700/viewall");
  }

  viewsubmit(): Observable<any> {
    return this.http.get("http://localhost:5500/viewall");
  }
}
