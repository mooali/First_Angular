import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'write something in the input field to change this label';
  isChecked = true;
  num = 1;

  // tslint:disable-next-line:typedef
  onChange(somethign){
    this.num++;
    this.title = somethign + this.num;
    console.log('HelloWorld');
  }
}
