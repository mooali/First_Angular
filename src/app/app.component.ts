import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCLI';
  isChecked = true;

  // tslint:disable-next-line:typedef
  onChange($event){
    this.title = 'ITS WORKED';
    console.log('HelloWorld');
  }
}
