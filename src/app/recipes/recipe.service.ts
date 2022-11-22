import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('a', 'Desc A', [new Ingredient('Ing1', 1), new Ingredient('Ing2', 2)]),
    new Recipe('b', 'Desc B', [])]

  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
