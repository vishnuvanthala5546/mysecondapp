import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A First Test Recipe',
      'This is Simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3txCZgnGLpRVU0' +
      '33OHrtwDwa5qAC0mZQ_xPH61cPpMOW8NfR_w'),
    new Recipe(
      'A Second Test Recipe',
      'This is Sweet a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiGppsltUxh12AG' +
      'xKKiY74JmBH3R0-LZvS9XoQI1YucGTBR_rAw'),
    new Recipe(
      'A Third Test Recipe',
      'This is Nice a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3txCZgnGLpRVU0' +
      '33OHrtwDwa5qAC0mZQ_xPH61cPpMOW8NfR_w')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
