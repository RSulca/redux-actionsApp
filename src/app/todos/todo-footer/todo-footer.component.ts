import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../filtros/filtro.action';
import * as actionsT from '../todo.actions';
import { validTypes } from '../../filtros/filtro.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  pendientes:number;
  tipos:validTypes;

  constructor(private store: Store<AppState>) {
    this.pendientes = 0;
    this.tipos = 'todos';
  }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.pendientes = data.todos.filter(todo => !todo.state).length;
      this.tipos = data.filtros;
    })
  }

  filter(type: validTypes) {
    this.store.dispatch(actions.filtro({ tipo: type }))
  }

  deleteAll(){
    this.store.dispatch(actionsT.borrarCompletados())
  }

}
