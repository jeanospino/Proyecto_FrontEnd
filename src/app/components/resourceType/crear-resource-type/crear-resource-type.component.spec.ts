import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResourceTypeComponent } from './crear-resource-type.component';

describe('CrearResourceTypeComponent', () => {
  let component: CrearResourceTypeComponent;
  let fixture: ComponentFixture<CrearResourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearResourceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
