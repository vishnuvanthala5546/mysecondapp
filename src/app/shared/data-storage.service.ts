import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-b6718.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-b6718.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
