import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPenaltyComponent } from './crear-penalty.component';

describe('CrearPenaltyComponent', () => {
  let component: CrearPenaltyComponent;
  let fixture: ComponentFixture<CrearPenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPenaltyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
