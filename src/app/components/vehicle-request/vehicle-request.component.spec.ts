import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRequestComponent } from './vehicle-request.component';

describe('VehicleRequestComponent', () => {
  let component: VehicleRequestComponent;
  let fixture: ComponentFixture<VehicleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
