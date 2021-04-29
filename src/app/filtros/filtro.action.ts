import { createAction, props } from '@ngrx/store';

export type validTypes = 'todos' | 'completados' | 'pendientes';

export const filtro = createAction('[Filtro] Set filter', props<{ tipo: validTypes }>());