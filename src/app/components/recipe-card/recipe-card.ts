import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORY_LABELS, DIFFICULTY_LABELS, Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
})
export class RecipeCard {
  readonly recipe = input.required<Recipe>();

  private readonly recipeService = inject(RecipeService);

  protected readonly categoryLabels = CATEGORY_LABELS;
  protected readonly difficultyLabels = DIFFICULTY_LABELS;
  protected readonly isFavorite = computed(() => this.recipeService.isFavorite(this.recipe().id));

  protected toggleFavorite(): void {
    this.recipeService.toggleFavorite(this.recipe().id);
  }
}
