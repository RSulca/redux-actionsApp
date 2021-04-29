import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Todo] Crear uno', props<{ text: string }>());
export const cambiarEstado = createAction('[Todo] Cambiar estado uno', props<{ id: number }>());
export const editarTexto = createAction('[Todo] Editar texto uno', props<{ id: number, text: string }>());
export const borrarTexto = createAction('[Todo] Borrar texto uno', props<{ id: number }>());
export const completarTodo = createAction('[Todo] Completar todo', props<{ completed: boolean }>());
export const borrarCompletados = createAction('[Todo] Borrar completados');