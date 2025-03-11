const weekdays = [
    'So',
    'Mo',
    'Di',
    'Mi',
    'Do',
    'Fr',
    'Sa'
]

export enum MealType {
    breakfast,
    lunch,
    dinner
}

export class Day {
    name: string = "";
    date: Date;

    constructor(date: Date) {
        this.date = date;
        this.name = weekdays[date.getDay()];
    }
}