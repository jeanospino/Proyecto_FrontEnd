import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPenaltyComponent } from './eliminar-penalty.component';

describe('EliminarPenaltyComponent', () => {
  let component: EliminarPenaltyComponent;
  let fixture: ComponentFixture<EliminarPenaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPenaltyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
