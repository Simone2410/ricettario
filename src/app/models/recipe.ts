export type Category = 'antipasti' | 'primi' | 'secondi' | 'dolci';

export type Difficulty = 'facile' | 'media' | 'difficile';

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: Category;
  difficulty: Difficulty;
  minutes: number;
  servings: number;
  emoji: string;
  color: string;
  publishedAt: string;
  ingredients: Ingredient[];
  steps: string[];
}

export const CATEGORY_LABELS: Record<Category, string> = {
  antipasti: 'Antipasti',
  primi: 'Primi piatti',
  secondi: 'Secondi piatti',
  dolci: 'Dolci',
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  facile: 'Facile',
  media: 'Media',
  difficile: 'Difficile',
};

/** Rango numerico per l'ordinamento: facile < media < difficile. */
export const DIFFICULTY_RANK: Record<Difficulty, number> = {
  facile: 0,
  media: 1,
  difficile: 2,
};

export type SortBy = 'default' | 'minutes' | 'difficulty' | 'publishedAt';

export type SortDirection = 'asc' | 'desc';
