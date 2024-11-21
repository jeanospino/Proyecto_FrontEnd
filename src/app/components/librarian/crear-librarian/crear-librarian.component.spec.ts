import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLibrarianComponent } from './crear-librarian.component';

describe('CrearLibrarianComponent', () => {
  let component: CrearLibrarianComponent;
  let fixture: ComponentFixture<CrearLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearLibrarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
