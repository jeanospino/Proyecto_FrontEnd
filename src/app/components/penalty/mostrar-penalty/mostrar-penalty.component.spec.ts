import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPenaltyComponent } from './mostrar-penalty.component';

describe('MostrarPenaltyComponent', () => {
  let component: MostrarPenaltyComponent;
  let fixture: ComponentFixture<MostrarPenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPenaltyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
