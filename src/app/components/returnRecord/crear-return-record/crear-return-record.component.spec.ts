import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReturnRecordComponent } from './crear-return-record.component';

describe('CrearReturnRecordComponent', () => {
  let component: CrearReturnRecordComponent;
  let fixture: ComponentFixture<CrearReturnRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearReturnRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearReturnRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
