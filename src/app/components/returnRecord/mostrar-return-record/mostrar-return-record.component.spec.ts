import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarReturnRecordComponent } from './mostrar-return-record.component';

describe('MostrarReturnRecordComponent', () => {
  let component: MostrarReturnRecordComponent;
  let fixture: ComponentFixture<MostrarReturnRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarReturnRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarReturnRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
