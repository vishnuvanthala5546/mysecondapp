import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is Simply a test',
      'https://pinchofyum.com/wp-content/uploads/Chili-Sesame-Zoodles-Recipe.jpg'),
    new Recipe(
      'A Test Recipe',
      'This is Simply a test',
      'https://img.taste.com.au/JtagdWTI/w720-h480-cfill-q80/taste/2016/11/' +
      'vegan-lasagne-94818-1.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
