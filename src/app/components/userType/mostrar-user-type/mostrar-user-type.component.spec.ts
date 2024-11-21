import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUserTypeComponent } from './mostrar-user-type.component';

describe('MostrarUserTypeComponent', () => {
  let component: MostrarUserTypeComponent;
  let fixture: ComponentFixture<MostrarUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarUserTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
