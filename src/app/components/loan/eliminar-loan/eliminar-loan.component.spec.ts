import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLoanComponent } from './eliminar-loan.component';

describe('EliminarLoanComponent', () => {
  let component: EliminarLoanComponent;
  let fixture: ComponentFixture<EliminarLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
