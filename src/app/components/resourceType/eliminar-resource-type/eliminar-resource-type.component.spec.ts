import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarResourceTypeComponent } from './eliminar-resource-type.component';

describe('EliminarResourceTypeComponent', () => {
  let component: EliminarResourceTypeComponent;
  let fixture: ComponentFixture<EliminarResourceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarResourceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
