import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.action';
import { Todo } from '../models/Todo';
import { validTypes } from './filtro.action';

export const initialState: validTypes = 'todos';

const _filtroReducer = createReducer(
    initialState,
    on(actions.filtro, (state, { tipo }) => tipo)
);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}