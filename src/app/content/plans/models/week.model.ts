import { Day } from "./day.model";

export class Week { 
  weekStart: Date;
  days: Day[] = [];

  get weekdays() { return this.days };

  constructor(start: Date) {
    this.weekStart = start;

    this.fillDate(this.weekStart);
  }

  private fillDate(start:Date) {
    for (var i = 0; i < 7; i++) {
      var curDate = new Date(start);
      curDate.setDate(curDate.getDate() + i);
      var day = new Day(curDate);
      this.days.push(day);
    }
  }
}
