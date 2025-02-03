import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-chicken',
  imports: [],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.scss'
})
export class ChickenComponent implements OnInit {
  callMeal: any;
  allMeal: Meals[] = [];
  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getBeef();
  }
  getBeef() {
    console.log('hiiii');
    this.callMeal = this._mealsService.getFilterMeal('Chicken').subscribe({
      next: (data) => {
        console.log(data);
        this.allMeal = data.meals;
      },
    });
  }

}
