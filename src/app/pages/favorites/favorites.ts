import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { I18nService } from '../../i18n/i18n.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-favorites',
  imports: [RecipeCard, RouterLink],
  templateUrl: './favorites.html',
})
export class Favorites {
  protected readonly recipeService = inject(RecipeService);
  protected readonly i18n = inject(I18nService);
}
