import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListsComponent } from './news-lists.component';

describe('NewsListsComponent', () => {
  let component: NewsListsComponent;
  let fixture: ComponentFixture<NewsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
