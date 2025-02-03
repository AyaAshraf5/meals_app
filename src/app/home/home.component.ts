import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals/meals.service';
import { Meals } from '../meals';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BeefComponent } from '../beef/beef.component';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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

  getMeals() {
    const selectedType = (document.getElementById('tabs') as HTMLSelectElement)
      .value;
    if (selectedType === 'All') {
      this.getData();
    } else {
      this._mealsService.getFilterMeal(selectedType).subscribe({
        next: (res) => {
          console.log(res);
          this.allData = res.meals;
        },
      });
    }
  }

  // getMeals() {
  //   this.callData = this._mealsService.getFilterMeal('').subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.allData = res.meals;
  //     },
  //   });
  // }
}
