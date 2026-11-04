import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [DatePipe, RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail {
  // Il parametro :id della rotta arriva qui grazie a withComponentInputBinding().
  readonly id = input<string>();

  private readonly recipeService = inject(RecipeService);
  protected readonly i18n = inject(I18nService);

  /** Locale per la pipe date, aggiornato al cambio lingua. */
  protected readonly dateLocale = computed(() => (this.i18n.language() === 'en' ? 'en-US' : 'it-IT'));

  protected readonly recipe = computed(() => this.recipeService.getById(this.id()));
  protected readonly isFavorite = computed(() => {
    const recipe = this.recipe();
    return recipe ? this.recipeService.isFavorite(recipe.id) : false;
  });

  protected toggleFavorite(): void {
    const recipe = this.recipe();
    if (recipe) {
      this.recipeService.toggleFavorite(recipe.id);
    }
  }
}
