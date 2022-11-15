import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipeP = new EventEmitter()
  recipes: Recipe[] = [new Recipe('a', 'Desc A'), new Recipe('b', 'Desc B')]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelect(recipe: Recipe){
    this.selectedRecipeP.emit(recipe)
  }

}
