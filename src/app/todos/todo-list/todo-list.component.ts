import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private store: Store<AppState>) { 
    this.todos = [];
   }

  ngOnInit(): void {
    this.store.select('todos').subscribe(texts => {
      this.todos = texts;
      console.log(this.todos);
    })
  }

}
