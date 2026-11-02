import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-favorites',
  imports: [RecipeCard, RouterLink],
  templateUrl: './favorites.html',
})
export class Favorites {
  protected readonly recipeService = inject(RecipeService);
}
