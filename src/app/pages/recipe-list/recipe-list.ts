import { Component, computed, inject, signal } from '@angular/core';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import {
  CATEGORY_LABELS,
  Category,
  DIFFICULTY_LABELS,
  Difficulty,
} from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCard],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  private readonly recipeService = inject(RecipeService);

  protected readonly query = signal('');
  protected readonly category = signal<Category | ''>('');
  protected readonly difficulty = signal<Difficulty | ''>('');

  protected readonly categories = Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
    value: value as Category,
    label,
  }));

  protected readonly difficulties = Object.entries(DIFFICULTY_LABELS).map(([value, label]) => ({
    value: value as Difficulty,
    label,
  }));

  protected readonly filteredRecipes = computed(() => {
    const query = this.query().trim().toLowerCase();
    const category = this.category();
    const difficulty = this.difficulty();

    return this.recipeService.recipes().filter((recipe) => {
      const matchesQuery =
        query === '' ||
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some((ingredient) => ingredient.name.toLowerCase().includes(query));
      const matchesCategory = category === '' || recipe.category === category;
      const matchesDifficulty = difficulty === '' || recipe.difficulty === difficulty;
      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  });

  protected readonly resultsLabel = computed(() => {
    const count = this.filteredRecipes().length;
    return count === 1 ? '1 ricetta trovata' : `${count} ricette trovate`;
  });

  protected readonly hasFilters = computed(
    () => this.query() !== '' || this.category() !== '' || this.difficulty() !== '',
  );

  protected onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected onCategoryChange(event: Event): void {
    this.category.set((event.target as HTMLSelectElement).value as Category | '');
  }

  protected onDifficultyChange(event: Event): void {
    this.difficulty.set((event.target as HTMLSelectElement).value as Difficulty | '');
  }

  protected resetFilters(): void {
    this.query.set('');
    this.category.set('');
    this.difficulty.set('');
  }
}
