import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarResourceComponent } from './mostrar-resource.component';

describe('MostrarResourceComponent', () => {
  let component: MostrarResourceComponent;
  let fixture: ComponentFixture<MostrarResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
