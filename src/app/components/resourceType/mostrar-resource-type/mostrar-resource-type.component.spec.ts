import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarResourceTypeComponent } from './mostrar-resource-type.component';

describe('MostrarResourceTypeComponent', () => {
  let component: MostrarResourceTypeComponent;
  let fixture: ComponentFixture<MostrarResourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarResourceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
