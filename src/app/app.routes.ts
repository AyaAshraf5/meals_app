import { Routes } from '@angular/router';
import { BeefComponent } from './beef/beef.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { AllMealsComponent } from './all-meals/all-meals.component';
import { ChickenComponent } from './chicken/chicken.component';
import { DessertComponent } from './dessert/dessert.component';
import { GoatComponent } from './goat/goat.component';
import { LambComponent } from './lamb/lamb.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { PastaComponent } from './pasta/pasta.component';
import { PorkComponent } from './pork/pork.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { SideComponent } from './side/side.component';
import { StarterComponent } from './starter/starter.component';
import { VeganComponent } from './vegan/vegan.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllMealsComponent ,title:"meals" },
  { path: 'beef', component: BeefComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'Chicken', component: ChickenComponent },
  { path: 'Dessert', component: DessertComponent },
  { path: 'Goat', component: GoatComponent },
  { path: 'Lamb', component: LambComponent },
  { path: 'Miscellaneous', component: MiscellaneousComponent },
  { path: 'Pasta', component: PastaComponent },
  { path: 'Pork', component: PorkComponent },
  { path: 'Seafood', component: SeafoodComponent },
  { path: 'Side', component: SideComponent },
  { path: 'Starter', component: StarterComponent },
  { path: 'Vegan', component: VeganComponent },
  { path: 'Vegetarian', component: VegetarianComponent },
  { path: '**', component: NotFoundComponent },
];
