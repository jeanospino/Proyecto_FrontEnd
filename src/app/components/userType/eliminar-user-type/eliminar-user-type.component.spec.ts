import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUserTypeComponent } from './eliminar-user-type.component';

describe('EliminarUserTypeComponent', () => {
  let component: EliminarUserTypeComponent;
  let fixture: ComponentFixture<EliminarUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarUserTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
