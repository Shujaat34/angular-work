import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Blog';
  name = "Bukhari";

  disabledBox = true;

  enableTextbox(){
    this.disabledBox = false;
  }

  disableBox(val : boolean){
    this.disabledBox = val;
  }
}
