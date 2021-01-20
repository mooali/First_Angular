import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Todo} from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultTitle = 'write something in the input field to change this label';
  title = this.defaultTitle;
  /**
   * accept only Alphanumeric input and spaces
   */
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


  /**
   * this will update the label based on the user input.
   * if the label is empty, lebel will reset on it's initial title
   * @param event any event
   */
  // tslint:disable-next-line:typedef
  updateLabel(event: any) {
    event.target.value ? this.title = event.target.value : this.title = 'write something in the input field to change this label';
  }

  /**
   * reset the label to it's initial message.
   * this is used after changing tabs.
   */
  // tslint:disable-next-line:typedef
  resetLabel() {
    this.title = this.title = 'write something in the input field to change this label';
  }

  /**
   * if the checkboxs is checked, task is completed.
   * @param id of the task(Todo task)
   */
  // tslint:disable-next-line:typedef
  onChange(id: number) {
    for (const todo of this.todos){
      if (id === todo.id){
        todo.completed = !todo.completed;
      }
    }
  }
}

