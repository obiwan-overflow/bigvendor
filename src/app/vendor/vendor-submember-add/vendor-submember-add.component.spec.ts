import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSubmemberAddComponent } from './vendor-submember-add.component';

describe('VendorSubmemberAddComponent', () => {
  let component: VendorSubmemberAddComponent;
  let fixture: ComponentFixture<VendorSubmemberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSubmemberAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSubmemberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
