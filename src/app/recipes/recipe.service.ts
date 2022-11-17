import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [new Recipe('a', 'Desc A'), new Recipe('b', 'Desc B')]

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
