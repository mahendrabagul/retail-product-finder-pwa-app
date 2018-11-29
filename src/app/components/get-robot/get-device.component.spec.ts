import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeviceComponent } from './get-device.component';

describe('GetDeviceComponent', () => {
  let component: GetDeviceComponent;
  let fixture: ComponentFixture<GetDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
