import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(private api:ApiService){}
  students:Student[]=[]
  
  ngOnInit(){
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
