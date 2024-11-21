import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarResourceComponent } from './actualizar-resource.component';

describe('ActualizarResourceComponent', () => {
  let component: ActualizarResourceComponent;
  let fixture: ComponentFixture<ActualizarResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
