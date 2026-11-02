import { Injectable, computed, effect, signal } from '@angular/core';
import { RECIPES } from '../data/recipes';
import { Recipe } from '../models/recipe';

const FAVORITES_KEY = 'ricettario.favorites';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly allRecipes = signal<Recipe[]>(RECIPES);
  private readonly favoriteIds = signal<string[]>(this.loadFavorites());

  readonly recipes = this.allRecipes.asReadonly();

  readonly favorites = computed(() =>
    this.allRecipes().filter((recipe) => this.favoriteIds().includes(recipe.id)),
  );

  readonly favoritesCount = computed(() => this.favoriteIds().length);

  constructor() {
    effect(() => {
      this.saveFavorites(this.favoriteIds());
    });
  }

  getById(id: string | undefined): Recipe | undefined {
    return this.allRecipes().find((recipe) => recipe.id === id);
  }

  isFavorite(id: string): boolean {
    return this.favoriteIds().includes(id);
  }

  toggleFavorite(id: string): void {
    this.favoriteIds.update((ids) =>
      ids.includes(id) ? ids.filter((current) => current !== id) : [...ids, id],
    );
  }

  private loadFavorites(): string[] {
    try {
      const raw = localStorage.getItem(FAVORITES_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
    } catch {
      return [];
    }
  }

  private saveFavorites(ids: string[]): void {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
    } catch {
      // Salvataggio non disponibile: i preferiti restano solo in memoria.
    }
  }
}
