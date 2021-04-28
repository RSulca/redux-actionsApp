import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from '../models/Todo';

export const stateInitial: Todo[] = [new Todo('Test'), new Todo('Test2'), new Todo('Test3')];

const _todoReducer = createReducer(
    stateInitial,
    on(actions.crear, (state, { text }) => [...state, new Todo(text)])
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}