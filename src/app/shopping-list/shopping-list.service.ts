import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>()
  private ingredients: Ingredient[] = [new Ingredient('aa', 1), new Ingredient('bb', 2)]

  constructor() { }

  getIng(){
    return this.ingredients.slice()
  }

  addIngr(i: Ingredient){
    this.ingredients.push(i)
    this.ingredientsAdded.emit(this.ingredients.slice())
  }
}
