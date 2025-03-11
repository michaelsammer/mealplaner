import { Component, Input } from '@angular/core';
import { Day, MealType } from '../../models/day.model';

@Component({
  selector: 'app-day-meal-cell',
  standalone: false,
  templateUrl: './day-meal-cell.component.html',
  styleUrl: './day-meal-cell.component.scss'
})
export class DayMealCellComponent {
  @Input() curDay!: Day;
  @Input() curType!: MealType;

  meals: string[] = [];

  constructor() {
    this.meals.push("Bananen");
  }
}
