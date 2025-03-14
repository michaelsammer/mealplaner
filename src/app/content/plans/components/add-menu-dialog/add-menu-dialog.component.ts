import { Component, inject, model } from '@angular/core';
import { MealDialogData } from '../../models/meal-dialog-data.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-add-menu-dialog',
  standalone: false,
  templateUrl: './add-menu-dialog.component.html',
  styleUrl: './add-menu-dialog.component.scss'
})
export class AddMenuDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddMenuDialogComponent>);
  readonly data = inject<MealDialogData>(MAT_DIALOG_DATA);
  meal = model(this.data.meal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
