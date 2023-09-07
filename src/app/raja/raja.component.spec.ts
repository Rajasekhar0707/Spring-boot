import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajaComponent } from './raja.component';

describe('RajaComponent', () => {
  let component: RajaComponent;
  let fixture: ComponentFixture<RajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajaComponent]
    });
    fixture = TestBed.createComponent(RajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
