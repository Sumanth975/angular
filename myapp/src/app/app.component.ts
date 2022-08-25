import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  message:string="hii Sumanth"
  jsonObject={
    "sumanth":"1",
    "sampth":2,
    jhdg:3
  }
  date=new Date();
}
