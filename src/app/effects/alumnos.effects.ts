import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromAlumnosActions from './alumnos.actions';
import { AlumnosService } from '../services/alumnos.service';

@Injectable()
export class AlumnosEffects {
  cargarAlumnos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAlumnosActions.cargarAlumnos),
      mergeMap(() =>
        this.alumnosService.obtener().pipe(
          map((alumnos) => fromAlumnosActions.cargarAlumnosExitoso({ alumnos })),
          catchError((error) => of(fromAlumnosActions.cargarAlumnosFallido({ error })))
        )
      )
    )
  );

  // Agregar efectos para otras acciones, como guardar, eliminar y editar alumnos

  constructor(
    private actions$: Actions,
    private alumnosService: AlumnosService
  ) {}
}