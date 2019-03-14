import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Chaynies Test Recipe',
      'This is Simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKCKuNlwcu3ujzz7Oa_tGLQYqxPlvMawT7rUOwuwdc-xAzj07p',
      [
        new Ingredient('Manchooriyan', 80),
        new Ingredient('Noodals', 60)
      ]),
    new Recipe(
      'A Panjabi Test Recipe',
      'This is Sweet a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ijb2vfRcis9D1ivTvuhpWPkCN1KZ7j5t7Nk1s8YYXGL27VR1',
      [
        new Ingredient('Paneer-Tika', 90),
        new Ingredient('Kaju-katri', 150)
      ]),
    new Recipe(
      'A Gujrati Test Recipe',
      'This is Nice a test',
      'https://i.ndtvimg.com/i/2017-07/gujarati-thali-620x350_620x350_81500012551.jpg',
      [
        new Ingredient('Sak-Rotli', 70),
        new Ingredient('Sole-Puri', 50)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
