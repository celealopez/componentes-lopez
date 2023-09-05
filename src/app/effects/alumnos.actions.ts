import { createAction, props } from '@ngrx/store';
import { Alumno } from '../models/alumno.model';

export const cargarAlumnos = createAction('[Alumnos] Cargar Alumnos');
export const cargarAlumnosExitoso = createAction('[Alumnos] Cargar Alumnos Exitoso', props<{ alumnos: Alumno[] }>());
export const cargarAlumnosFallido = createAction('[Alumnos] Cargar Alumnos Fallido', props<{ error: string }>());

export const guardarAlumno = createAction('[Alumnos] Guardar Alumno', props<{ alumno: Alumno }>());
export const guardarAlumnoExitoso = createAction('[Alumnos] Guardar Alumno Exitoso', props<{ alumno: Alumno }>());
export const guardarAlumnoFallido = createAction('[Alumnos] Guardar Alumno Fallido', props<{ error: string }>());

export const eliminarAlumno = createAction('[Alumnos] Eliminar Alumno', props<{ id: string }>());
export const eliminarAlumnoExitoso = createAction('[Alumnos] Eliminar Alumno Exitoso', props<{ id: string }>());
export const eliminarAlumnoFallido = createAction('[Alumnos] Eliminar Alumno Fallido', props<{ error: string }>());

export const editarAlumno = createAction('[Alumnos] Editar Alumno', props<{ alumno: Alumno }>());
export const editarAlumnoExitoso = createAction('[Alumnos] Editar Alumno Exitoso', props<{ alumno: Alumno }>());
export const editarAlumnoFallido = createAction('[Alumnos] Editar Alumno Fallido', props<{ error: string }>());