import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPenaltyComponent } from './actualizar-penalty.component';

describe('ActualizarPenaltyComponent', () => {
  let component: ActualizarPenaltyComponent;
  let fixture: ComponentFixture<ActualizarPenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPenaltyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
