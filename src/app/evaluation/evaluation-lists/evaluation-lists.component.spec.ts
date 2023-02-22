import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationListsComponent } from './evaluation-lists.component';

describe('EvaluationListsComponent', () => {
  let component: EvaluationListsComponent;
  let fixture: ComponentFixture<EvaluationListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
