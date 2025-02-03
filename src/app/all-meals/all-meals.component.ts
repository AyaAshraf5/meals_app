import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-all-meals',
  imports: [],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss',
})
export class AllMealsComponent implements OnInit {
  callData: any;

  allData: Meals[] = [];

  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getData();
    // this.getMeals();
  }

  getData() {
    this.callData = this._mealsService.getMeal().subscribe({
      next: (res) => {
        console.log(res);
        this.allData = res.meals;
      },
    });
  }
}
