import { Component } from '@angular/core';
import { Day, MealType } from './models/day.model';
import { Week } from './models/week.model';

@Component({
  selector: 'app-plans',
  standalone: false,
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  curWeek: Week;
  weekdays: Day[];

  constructor() {
    this.curWeek = new Week(new Date(2025, 2, 10));
    this.weekdays = this.curWeek.days;
  }

  getMealType(n: number): MealType {
    switch (n) {
      case 0: return MealType.breakfast;
      case 1: return MealType.lunch;
      case 2: return MealType.dinner;
      default: return MealType.breakfast;
    }
  }
}
