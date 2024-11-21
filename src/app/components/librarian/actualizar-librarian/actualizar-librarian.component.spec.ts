import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLibrarianComponent } from './actualizar-librarian.component';

describe('ActualizarLibrarianComponent', () => {
  let component: ActualizarLibrarianComponent;
  let fixture: ComponentFixture<ActualizarLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarLibrarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
