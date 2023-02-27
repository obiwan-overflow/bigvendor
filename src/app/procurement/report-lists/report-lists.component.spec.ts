import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListsComponent } from './report-lists.component';

describe('ReportListsComponent', () => {
  let component: ReportListsComponent;
  let fixture: ComponentFixture<ReportListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
