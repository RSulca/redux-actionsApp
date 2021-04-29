import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './models/Todo';
import { validTypes } from './filtros/filtro.action';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtros/filtro.reducer';

export interface AppState {
    todos: Todo[],
    filtros: validTypes
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtros: filtroReducer
}