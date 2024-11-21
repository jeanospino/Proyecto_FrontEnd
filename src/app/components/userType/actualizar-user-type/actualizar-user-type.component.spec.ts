import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUserTypeComponent } from './actualizar-user-type.component';

describe('ActualizarUserTypeComponent', () => {
  let component: ActualizarUserTypeComponent;
  let fixture: ComponentFixture<ActualizarUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarUserTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
