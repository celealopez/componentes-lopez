import { createReducer, on } from '@ngrx/store';
import * as fromAlumnosActions from './alumnos.actions';
import { Alumno } from '../models/alumno.model';

export interface State {
  alumnos: Alumno[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  alumnos: [],
  loading: false,
  error: null,
};

export const alumnosReducer = createReducer(
  initialState,
  // Manejar acciones de carga de alumnos
  on(fromAlumnosActions.cargarAlumnos, (state) => ({ ...state, loading: true })),
  on(fromAlumnosActions.cargarAlumnosExitoso, (state, { alumnos }) => ({ ...state, alumnos, loading: false, error: null })),
  on(fromAlumnosActions.cargarAlumnosFallido, (state, { error }) => ({ ...state, loading: false, error })),

  // Manejar acciones de guardado de alumnos
  on(fromAlumnosActions.guardarAlumno, (state) => ({ ...state, loading: true })),
  on(fromAlumnosActions.guardarAlumnoExitoso, (state, { alumno }) => ({
    ...state,
    alumnos: [...state.alumnos, alumno],
    loading: false,
    error: null,
  })),
  on(fromAlumnosActions.guardarAlumnoFallido, (state, { error }) => ({ ...state, loading: false, error })),

  // Manejar acciones de eliminación de alumnos
  on(fromAlumnosActions.eliminarAlumno, (state) => ({ ...state, loading: true })),
  on(fromAlumnosActions.eliminarAlumnoExitoso, (state, { id }) => ({
    ...state,
    alumnos: state.alumnos.filter((alumno) => alumno.id.toString() !== id),
    loading: false,
    error: null,
  })),
  on(fromAlumnosActions.eliminarAlumnoFallido, (state, { error }) => ({ ...state, loading: false, error })),

  // Manejar acciones de edición de alumnos
  on(fromAlumnosActions.editarAlumno, (state) => ({ ...state, loading: true })),
  on(fromAlumnosActions.editarAlumnoExitoso, (state, { alumno }) => ({
    ...state,
    alumnos: state.alumnos.map((a) => (a.id === alumno.id ? alumno : a)),
    loading: false,
    error: null,
  })),
  on(fromAlumnosActions.editarAlumnoFallido, (state, { error }) => ({ ...state, loading: false, error }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnos from './alumnos.reducer';

const selectAlumnosState = createFeatureSelector<fromAlumnos.State>('alumnos');

export const selectAlumnos = createSelector(selectAlumnosState, (state) => state.alumnos);
export const selectAlumnosLoading = createSelector(selectAlumnosState, (state) => state.loading);
export const selectAlumnosError = createSelector(selectAlumnosState, (state) => state.error);