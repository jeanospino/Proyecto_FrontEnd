import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUserTypeComponent } from './crear-user-type.component';

describe('CrearUserTypeComponent', () => {
  let component: CrearUserTypeComponent;
  let fixture: ComponentFixture<CrearUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUserTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
