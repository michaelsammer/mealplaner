import { Meal } from "../../../models/meal.model";
import { Day, MealType } from "./day.model";

export interface MealDialogData {
    day: Day;
    mealType: MealType;
    meal: string;
  }