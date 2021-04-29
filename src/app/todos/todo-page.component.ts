import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from './todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  checkCompleted: FormControl;

  constructor(private store: Store<AppState>) {
    this.checkCompleted = new FormControl(false);
  }

  ngOnInit(): void {
    this.checkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.completarTodo({ completed: value }));
    })
  }

}
