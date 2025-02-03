import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-lamb',
  imports: [],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.scss'
})
export class LambComponent implements OnInit {
  callMeal: any;
  allMeal: Meals[] = [];
  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getBeef();
  }
  getBeef() {
    console.log('hiiii');
    this.callMeal = this._mealsService.getFilterMeal('Lamb').subscribe({
      next: (data) => {
        console.log(data);
        this.allMeal = data.meals;
      },
    });
  }

}
