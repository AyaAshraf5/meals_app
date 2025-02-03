import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals';
import { MealsService } from '../core/services/meals/meals.service';

@Component({
  selector: 'app-breakfast',
  imports: [],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.scss',
})
export class BreakfastComponent implements OnInit {
  callMeal: any;
  allMeal: Meals[] = [];
  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getBreakfast();
  }
  getBreakfast() {
    console.log('hiiii');
    this.callMeal = this._mealsService.getFilterMeal('breakfast').subscribe({
      next: (data) => {
        console.log(data);
        this.allMeal = data.meals;
      },
    });
  }
}
