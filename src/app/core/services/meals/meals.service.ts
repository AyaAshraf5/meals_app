import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private _httpClient: HttpClient) {}

  getMeal(): Observable<any> {
    return this._httpClient.get(
      // 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta'
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
  }

  getFilterMeal(type: string): Observable<any> {
    return this._httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
    );
  }
}
