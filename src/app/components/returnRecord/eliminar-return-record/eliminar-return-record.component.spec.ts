import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarReturnRecordComponent } from './eliminar-return-record.component';

describe('EliminarReturnRecordComponent', () => {
  let component: EliminarReturnRecordComponent;
  let fixture: ComponentFixture<EliminarReturnRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarReturnRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarReturnRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
