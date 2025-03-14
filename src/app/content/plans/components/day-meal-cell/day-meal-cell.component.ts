import { Component, Input, inject } from '@angular/core';
import { Day, MealType } from '../../models/day.model';
import { Meal } from '../../../../models/meal.model';
import { MatDialog } from '@angular/material/dialog';
import { AddMenuDialogComponent } from '../add-menu-dialog/add-menu-dialog.component';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-day-meal-cell',
  standalone: false,
  templateUrl: './day-meal-cell.component.html',
  styleUrl: './day-meal-cell.component.scss'
})
export class DayMealCellComponent {
  @Input() curDay!: Day;
  @Input() curType!: MealType;

  readonly addDialog = inject(MatDialog);
  readonly meal = '';
  
  meals: Meal[] = [];

  constructor() {
    
  }

  openAddDialog() {
    var dlg = this.addDialog.open(AddMenuDialogComponent, {
      data: {day: this.curDay, mealType: this.curType, meal: this.meal}
    });

    dlg.afterClosed().subscribe( (res) => {      
     if (res !== undefined) {
        var meal: Meal = {name: res, description: ''};
        this.meals.push(meal);
      }
    });
  }

  drop(event: CdkDragDrop<Meal[]>) {
    if (event.container !== event.previousContainer) {
      //this.meals.push(event.item.data);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  remove(meal: Meal) {
    this.meals.splice(this.meals.findIndex((v, i, o) => v.name == meal.name), 1);
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
