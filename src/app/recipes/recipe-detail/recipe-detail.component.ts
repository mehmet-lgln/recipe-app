import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe?: Recipe;

  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToCart(){
    for(let i of this.recipe!.ingredients){
       const addedElemet = new Ingredient(i.name, i.amount)
    this.shoppingListService.addIngr(addedElemet)
    }

  }
}
