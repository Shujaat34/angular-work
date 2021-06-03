import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Blog';
  val1 = "";
  val2 = "";
  getValueOnTextBox(str : string){
    console.warn(str);
    this.val1 = str;
  }

  getValueOnButtonClick(str : string){
    this.val2 = str;
  }


}
