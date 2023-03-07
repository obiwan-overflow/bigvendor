import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvlForEquipmentComponent } from './avl-for-equipment.component';

describe('AvlForEquipmentComponent', () => {
  let component: AvlForEquipmentComponent;
  let fixture: ComponentFixture<AvlForEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvlForEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvlForEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
