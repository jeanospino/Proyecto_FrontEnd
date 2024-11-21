import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResourceComponent } from './crear-resource.component';

describe('CrearResourceComponent', () => {
  let component: CrearResourceComponent;
  let fixture: ComponentFixture<CrearResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
