export type Category = 'antipasti' | 'primi' | 'secondi' | 'dolci';

export type Difficulty = 'facile' | 'media' | 'difficile';

/** Testo disponibile in entrambe le lingue dell'app. */
export interface LocalizedText {
  it: string;
  en: string;
}

export interface Ingredient {
  name: LocalizedText;
  quantity: LocalizedText;
}

export interface Recipe {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: Category;
  difficulty: Difficulty;
  minutes: number;
  servings: number;
  emoji: string;
  color: string;
  publishedAt: string;
  ingredients: Ingredient[];
  steps: LocalizedText[];
}

/** Rango numerico per l'ordinamento: facile < media < difficile. */
export const DIFFICULTY_RANK: Record<Difficulty, number> = {
  facile: 0,
  media: 1,
  difficile: 2,
};

export type SortBy = 'default' | 'minutes' | 'difficulty' | 'publishedAt';

export type SortDirection = 'asc' | 'desc';
