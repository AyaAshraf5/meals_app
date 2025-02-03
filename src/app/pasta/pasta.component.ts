import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.scss'
})
export class PastaComponent implements OnInit {
  callMeal: any;
  allMeal: Meals[] = [];
  constructor(private _mealsService: MealsService) {}

  ngOnInit(): void {
    this.getBeef();
  }
  getBeef() {
    console.log('hiiii');
    this.callMeal = this._mealsService.getFilterMeal('Pasta').subscribe({
      next: (data) => {
        console.log(data);
        this.allMeal = data.meals;
      },
    });
  }

}
