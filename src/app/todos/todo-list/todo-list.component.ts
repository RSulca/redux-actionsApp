import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../../models/Todo';
import { validTypes } from '../../filtros/filtro.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  tipos: validTypes;


  constructor(private store: Store<AppState>) {
    this.todos = [];
    this.tipos = 'todos';
  }

  ngOnInit(): void {
    this.store.subscribe(({ todos, filtros }) => {
      this.todos = todos;
      this.tipos = filtros;
    })
  }

}
