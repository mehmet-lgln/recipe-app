import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient('aa', 1), new Ingredient('bb', 2)]

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngr(i: Ingredient){
    this.ingredients.push(i)
  }
}
