import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorListsComponent } from './vendor-lists.component';

describe('VendorListsComponent', () => {
  let component: VendorListsComponent;
  let fixture: ComponentFixture<VendorListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
