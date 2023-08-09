import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompComponent } from './main-comp.component';

describe('MainCompComponent', () => {
  let component: MainCompComponent;
  let fixture: ComponentFixture<MainCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCompComponent]
    });
    fixture = TestBed.createComponent(MainCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
