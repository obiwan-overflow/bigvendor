import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPreviewComponent } from './evaluation-preview.component';

describe('EvaluationPreviewComponent', () => {
  let component: EvaluationPreviewComponent;
  let fixture: ComponentFixture<EvaluationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
