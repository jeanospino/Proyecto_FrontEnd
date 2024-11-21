import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLibrarianComponent } from './mostrar-librarian.component';

describe('MostrarLibrarianComponent', () => {
  let component: MostrarLibrarianComponent;
  let fixture: ComponentFixture<MostrarLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarLibrarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
