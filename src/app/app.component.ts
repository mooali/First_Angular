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
  nam = 'some';
  // tslint:disable-next-line:typedef
  onChange(event: any){
    // tslint:disable-next-line:triple-equals
    event.target.value ? this.title = event.currentTarget.value : this.title = 'write something in the input field to change this label';
  }
}
