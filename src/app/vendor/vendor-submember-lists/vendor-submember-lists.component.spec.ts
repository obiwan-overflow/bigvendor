import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSubmemberListsComponent } from './vendor-submember-lists.component';

describe('VendorSubmemberListsComponent', () => {
  let component: VendorSubmemberListsComponent;
  let fixture: ComponentFixture<VendorSubmemberListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorSubmemberListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorSubmemberListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
