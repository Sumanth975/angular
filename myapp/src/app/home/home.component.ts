import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { Employee } from 'src/employee';
import { ApiService } from '../api.service';
import { Student } from '../Student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees:Employee[]=[];
  students:Student[]=[]
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.api.getStudents().subscribe({
      next:(resp:Student[])=>{
        this.students=resp;
        console.log(this.students)
        console.log('bye')
      },
      error:(err:Student[])=>{
        console.log(err)
      }
    })
  }
  
  
}
