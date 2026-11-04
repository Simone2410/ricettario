import { Component, computed, inject, signal } from '@angular/core';
import { RecipeCard } from '../../components/recipe-card/recipe-card';
import {
  Category,
  DIFFICULTY_RANK,
  Difficulty,
  SortBy,
  SortDirection,
} from '../../models/recipe';
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
  protected readonly sortBy = signal<SortBy | null>(null);
  protected readonly sortDir = signal<SortDirection>('desc');

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

  protected readonly sortedRecipes = computed(() => {
    const filtered = this.filteredRecipes();
    const sortBy = this.sortBy();
    if (sortBy === null) {
      return filtered;
    }

    const direction = this.sortDir() === 'asc' ? 1 : -1;
    const compare = (a: number | string, b: number | string): number =>
      a < b ? -1 : a > b ? 1 : 0;

    return [...filtered].sort((a, b) => {
      let result: number;
      if (sortBy === 'minutes') {
        result = compare(a.minutes, b.minutes);
      } else if (sortBy === 'difficulty') {
        result = compare(DIFFICULTY_RANK[a.difficulty], DIFFICULTY_RANK[b.difficulty]);
      } else {
        // publishedAt: stringa ISO 'YYYY-MM-DD', l'ordine lessicografico è cronologico.
        result = compare(a.publishedAt, b.publishedAt);
      }
      // Tie-breaker stabile: a parità di valore ordina per titolo.
      return result !== 0 ? direction * result : compare(a.title, b.title);
    });
  });

  protected readonly resultsLabel = computed(() => {
    const t = this.i18n.t().recipeList;
    const count = this.sortedRecipes().length;
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

  /**
   * Clic su un criterio: se è già attivo inverte la direzione,
   * altrimenti lo attiva con la direzione di default per quel campo.
   */
  protected onSortClick(sortBy: SortBy): void {
    if (this.sortBy() === sortBy) {
      this.sortDir.update((dir) => (dir === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortBy.set(sortBy);
      // Data: dalla più recente (desc). Tempo e difficoltà: dal più semplice/rapido (asc).
      this.sortDir.set(sortBy === 'publishedAt' ? 'desc' : 'asc');
    }
  }

  protected resetFilters(): void {
    this.query.set('');
    this.category.set('');
    this.difficulty.set('');
    this.sortBy.set(null);
    this.sortDir.set('desc');
  }
}
