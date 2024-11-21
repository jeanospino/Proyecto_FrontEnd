import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLoanComponent } from './mostrar-loan.component';

describe('MostrarLoanComponent', () => {
  let component: MostrarLoanComponent;
  let fixture: ComponentFixture<MostrarLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
