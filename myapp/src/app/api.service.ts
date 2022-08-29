import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Student } from './Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url:String="http://localhost:8080/";
  getStudents(){
    
    return this.http.get<Student[]>(this.url+"students")
  }
}
