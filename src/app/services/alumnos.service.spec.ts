import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AlumnosService } from './alumnos.service';
import { Alumno } from '../models/alumno.model';

describe('AlumnosService', () => {
  let service: AlumnosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlumnosService]
    });

    service = TestBed.inject(AlumnosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve alumnos', () => {
    const mockAlumnos: Alumno[] = [{ id: 1, nombre: 'John' }, { id: 2, nombre: 'Jane' }];

    service.obtener().subscribe((alumnos) => {
      expect(alumnos.length).toBe(2);
      expect(alumnos).toEqual(mockAlumnos);
    });

    const req = httpMock.expectOne('https://63645a9d7b209ece0f451a47.mockapi.io/alumnos');
    expect(req.request.method).toBe('GET');
    req.flush(mockAlumnos);
  });

  it('should add a new alumno', () => {
    const newAlumno: Alumno = { id: 3, nombre: 'Alice' };

    service.guardar(newAlumno).subscribe((alumno) => {
      expect(alumno).toEqual(newAlumno);
    });

    const req = httpMock.expectOne('https://63645a9d7b209ece0f451a47.mockapi.io/alumnos');
    expect(req.request.method).toBe('POST');
    req.flush(newAlumno);
  });

  it('should delete an alumno', () => {
    const alumnoId = '1';

    service.eliminar(alumnoId).subscribe();

    const req = httpMock.expectOne(`https://63645a9d7b209ece0f451a47.mockapi.io/alumnos/${alumnoId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('should edit an alumno', () => {
    const editedAlumno: Alumno = { id: 1, nombre: 'Updated Name' };

    service.editar(editedAlumno).subscribe();

    const req = httpMock.expectOne(`https://63645a9d7b209ece0f451a47.mockapi.io/alumnos/${editedAlumno.id}`);
    expect(req.request.method).toBe('PUT');
  });
});