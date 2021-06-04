import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Blog';
  colorArray = ['blue','green','yellow','orange','black'];

  persons = [
    {
      name:'Bukhari',
      age: 20
    },{
      name:'John',
      age: 22
    },{
      name:'Saleem',
      age: 33
    },{
      name:'Rose',
      age: 21
    },
  ]
}
