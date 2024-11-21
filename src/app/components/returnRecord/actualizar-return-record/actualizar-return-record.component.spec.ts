import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarReturnRecordComponent } from './actualizar-return-record.component';

describe('ActualizarReturnRecordComponent', () => {
  let component: ActualizarReturnRecordComponent;
  let fixture: ComponentFixture<ActualizarReturnRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarReturnRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarReturnRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
