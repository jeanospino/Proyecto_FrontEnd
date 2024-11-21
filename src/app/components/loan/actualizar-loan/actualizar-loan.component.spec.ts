import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarLoanComponent } from './actualizar-loan.component';

describe('ActualizarLoanComponent', () => {
  let component: ActualizarLoanComponent;
  let fixture: ComponentFixture<ActualizarLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
