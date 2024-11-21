import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLibrarianComponent } from './eliminar-librarian.component';

describe('EliminarLibrarianComponent', () => {
  let component: EliminarLibrarianComponent;
  let fixture: ComponentFixture<EliminarLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarLibrarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
