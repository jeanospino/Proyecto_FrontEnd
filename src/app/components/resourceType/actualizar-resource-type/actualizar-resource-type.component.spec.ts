import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarResourceTypeComponent } from './actualizar-resource-type.component';

describe('ActualizarResourceTypeComponent', () => {
  let component: ActualizarResourceTypeComponent;
  let fixture: ComponentFixture<ActualizarResourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarResourceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
