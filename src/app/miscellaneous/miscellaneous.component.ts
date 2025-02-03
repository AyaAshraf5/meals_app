import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-miscellaneous',
  imports: [],
  templateUrl: './miscellaneous.component.html',
  styleUrl: './miscellaneous.component.scss'
})
export class MiscellaneousComponent implements OnInit {
  callMeal: any;
  allMeal: Meals[] = [];
  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getBeef();
  }
  getBeef() {
    console.log('hiiii');
    this.callMeal = this._mealsService.getFilterMeal('Miscellaneous').subscribe({
      next: (data) => {
        console.log(data);
        this.allMeal = data.meals;
      },
    });
  }

}
