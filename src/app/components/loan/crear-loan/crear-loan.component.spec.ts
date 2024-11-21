import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLoanComponent } from './crear-loan.component';

describe('CrearLoanComponent', () => {
  let component: CrearLoanComponent;
  let fixture: ComponentFixture<CrearLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
