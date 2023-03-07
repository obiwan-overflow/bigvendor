import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvlForServiceComponent } from './avl-for-service.component';

describe('AvlForServiceComponent', () => {
  let component: AvlForServiceComponent;
  let fixture: ComponentFixture<AvlForServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvlForServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvlForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
