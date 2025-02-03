import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-seafood',
  imports: [],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.scss'
})
export class SeafoodComponent implements OnInit {
  callMeal: any;
  allMeal: Meals[] = [];
  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getBeef();
  }
  getBeef() {
    console.log('hiiii');
    this.callMeal = this._mealsService.getFilterMeal('Seafood').subscribe({
      next: (data) => {
        console.log(data);
        this.allMeal = data.meals;
      },
    });
  }

}
