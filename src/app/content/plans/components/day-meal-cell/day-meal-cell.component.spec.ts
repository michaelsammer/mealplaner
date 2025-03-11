import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayMealCellComponent } from './day-meal-cell.component';

describe('DayMealCellComponent', () => {
  let component: DayMealCellComponent;
  let fixture: ComponentFixture<DayMealCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayMealCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayMealCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
