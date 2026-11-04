import { Injectable, computed, effect, signal } from '@angular/core';
import { RECIPES } from '../data/recipes';
import { Category, Difficulty, LocalizedText, Recipe } from '../models/recipe';

const FAVORITES_KEY = 'ricettario.favorites';
const RECIPES_KEY = 'ricettario.recipes';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly allRecipes = signal<Recipe[]>([...RECIPES, ...this.loadUserRecipes()]);
  private readonly favoriteIds = signal<string[]>(this.loadFavorites());

  readonly recipes = this.allRecipes.asReadonly();

  readonly favorites = computed(() =>
    this.allRecipes().filter((recipe) => this.favoriteIds().includes(recipe.id)),
  );

  readonly favoritesCount = computed(() => this.favoriteIds().length);

  constructor() {
    effect(() => {
      this.saveFavorites(this.favoriteIds());
      this.saveUserRecipes();
    });
  }

  getById(id: string | undefined): Recipe | undefined {
    return this.allRecipes().find((recipe) => recipe.id === id);
  }

  /** Aggiunge una ricetta creata dall'utente e restituisce l'id generato. */
  addRecipe(recipe: Omit<Recipe, 'id'>): string {
    const id = this.uniqueId(recipe.title.it);
    this.allRecipes.update((recipes) => [...recipes, { ...recipe, id }]);
    return id;
  }

  isFavorite(id: string): boolean {
    return this.favoriteIds().includes(id);
  }

  toggleFavorite(id: string): void {
    this.favoriteIds.update((ids) =>
      ids.includes(id) ? ids.filter((current) => current !== id) : [...ids, id],
    );
  }

  /** Genera uno slug dal titolo, con suffisso progressivo se già esistente. */
  private uniqueId(title: string): string {
    const base =
      title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'ricetta';
    let id = base;
    let counter = 2;
    while (this.allRecipes().some((recipe) => recipe.id === id)) {
      id = `${base}-${counter}`;
      counter++;
    }
    return id;
  }

  private isRecipe(value: unknown): value is Recipe {
    if (typeof value !== 'object' || value === null) {
      return false;
    }
    const recipe = value as Record<string, unknown>;
    return (
      typeof recipe['id'] === 'string' &&
      this.isLocalizedText(recipe['title']) &&
      this.isLocalizedText(recipe['description']) &&
      typeof recipe['category'] === 'string' &&
      typeof recipe['difficulty'] === 'string' &&
      typeof recipe['minutes'] === 'number' &&
      typeof recipe['servings'] === 'number' &&
      typeof recipe['emoji'] === 'string' &&
      typeof recipe['color'] === 'string' &&
      typeof recipe['publishedAt'] === 'string' &&
      Array.isArray(recipe['ingredients']) &&
      recipe['ingredients'].every(
        (ingredient) =>
          typeof ingredient === 'object' &&
          ingredient !== null &&
          this.isLocalizedText((ingredient as Record<string, unknown>)['name']) &&
          this.isLocalizedText((ingredient as Record<string, unknown>)['quantity']),
      ) &&
      Array.isArray(recipe['steps']) &&
      recipe['steps'].every((step) => this.isLocalizedText(step))
    );
  }

  /** Accetta sia il nuovo formato {it, en} sia il vecchio formato stringa (retrocompatibilità). */
  private isLocalizedText(value: unknown): value is LocalizedText {
    if (typeof value === 'object' && value !== null) {
      const text = value as Record<string, unknown>;
      return typeof text['it'] === 'string' && typeof text['en'] === 'string';
    }
    // Vecchie ricette salvate con stringhe semplici: convertibili al volo.
    return typeof value === 'string';
  }

  private loadUserRecipes(): Recipe[] {
    try {
      const raw = localStorage.getItem(RECIPES_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed.filter(this.isRecipe);
    } catch {
      return [];
    }
  }

  private saveUserRecipes(): void {
    // Salva solo le ricette aggiunte dall'utente, non quelle di esempio.
    const userRecipes = this.allRecipes().filter(
      (recipe) => !RECIPES.some((sample) => sample.id === recipe.id),
    );
    try {
      localStorage.setItem(RECIPES_KEY, JSON.stringify(userRecipes));
    } catch {
      // Salvataggio non disponibile: le ricette restano solo in memoria.
    }
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
