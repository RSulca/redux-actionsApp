import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from '../models/Todo';

export const stateInitial: Todo[] = [new Todo('Test')];

const _todoReducer = createReducer(
    stateInitial,
    on(actions.crear, (state, { text }) => [...state, new Todo(text)]),
    on(actions.cambiarEstado, (state, { id }) => {
        return state.map(st => {
            if (st.id === id) {
                return { ...st, state: !st.state }
            } else {
                return st;
            }
        });
    }),
    on(actions.editarTexto, (state, { id, text }) => {
        return state.map(st => {
            if (st.id === id) {
                return { ...st, text }
            } else {
                return st;
            }
        });
    }),
    on(actions.borrarTexto, (state, { id }) => state.filter(st => st.id !== id)),
    on(actions.completarTodo, (state, { completed }) => state.map(st => { return { ...st, state: completed } })),
    on(actions.borrarCompletados, (state) => state.filter(st => !st.state))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}