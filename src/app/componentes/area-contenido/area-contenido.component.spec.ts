import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaContenidoComponent } from './area-contenido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Alumno } from 'src/app/models/alumno.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';

describe('AreaContenidoComponent', () => {
  let component: AreaContenidoComponent;
  let fixture: ComponentFixture<AreaContenidoComponent>;
  let alumnosService: AlumnosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [AreaContenidoComponent],
      providers: [
        AlumnosService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    alumnosService = TestBed.inject(AlumnosService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call alumnosService.eliminar on eliminarAlumno', () => {
    const alumnoId = '1';
    spyOn(alumnosService, 'eliminar').and.returnValue(of());

    component.eliminarAlumno(alumnoId);

    expect(alumnosService.eliminar).toHaveBeenCalledWith(alumnoId);

  });

});





