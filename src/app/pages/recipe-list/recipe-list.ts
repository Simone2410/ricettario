import { Component, computed, inject, signal } from '@angular/core';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import { Category, Difficulty } from '../../models/recipe';
import { I18nService } from '../../i18n/i18n.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCard],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  private readonly recipeService = inject(RecipeService);
  protected readonly i18n = inject(I18nService);

  protected readonly query = signal('');
  protected readonly category = signal<Category | ''>('');
  protected readonly difficulty = signal<Difficulty | ''>('');

  protected readonly categories = computed(() =>
    Object.entries(this.i18n.t().labels.categories).map(([value, label]) => ({
      value: value as Category,
      label,
    })),
  );

  protected readonly difficulties = computed(() =>
    Object.entries(this.i18n.t().labels.difficulties).map(([value, label]) => ({
      value: value as Difficulty,
      label,
    })),
  );

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
    const t = this.i18n.t().recipeList;
    const count = this.filteredRecipes().length;
    return count === 1 ? t.resultOne : t.resultMany.replace('{count}', String(count));
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
