import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public ingredients: Ingredient[]

  constructor(name: string, description: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
  }
}
