import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Todo} from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'write something in the input field to change this label';
  textValidate = new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ]*$')]);
  todos: Todo[] = [
    {
      id: 1,
      title: 'Study for IT-Sec exam',
      completed: false
    },
    {
      id: 2,
      title: 'Solve Task 1',
      completed: false
    },
    {
      id: 3,
      title: 'Solve Task 2',
      completed: false
    },
    {
      id: 4,
      title: 'the 1 hour daily walk',
      completed: false
    },
  ];

  // tslint:disable-next-line:typedef
  updateLabel(event: any) {
    event.target.value ? this.title = event.target.value : this.title = 'write something in the input field to change this label';
  }

  // tslint:disable-next-line:typedef
  resetLabel() {
    this.title = this.title = 'write something in the input field to change this label';
  }
  // tslint:disable-next-line:typedef
  onChange(id: number) {
    for (const todo of this.todos){
      if (id === todo.id){
        todo.completed ? todo.completed = false : todo.completed = true;
      }
    }
  }
}

