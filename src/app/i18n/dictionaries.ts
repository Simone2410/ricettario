import { Language } from './i18n.service';

export interface Dictionary {
  shell: {
    brand: string;
    navAriaLabel: string;
    navRecipes: string;
    navFavorites: string;
    navAbout: string;
    copyright: string;
    tagline: string;
  };
  labels: {
    categories: Record<'antipasti' | 'primi' | 'secondi' | 'dolci', string>;
    difficulties: Record<'facile' | 'media' | 'difficile', string>;
  };
  shared: {
    minutes: string;
    servings: string;
    time: string;
    servingsLabel: string;
    difficulty: string;
    publishedOn: string;
    quantitiesFor: string;
    people: string;
    addFavorite: string;
    removeFavorite: string;
  };
  recipeList: {
    title: string;
    intro: string;
    searchPlaceholder: string;
    searchAria: string;
    categoryAria: string;
    allCategories: string;
    difficultyAria: string;
    allDifficulties: string;
    resetFilters: string;
    resultOne: string;
    resultMany: string;
    emptyText: string;
    showAll: string;
  };
  recipeDetail: {
    back: string;
    ingredients: string;
    steps: string;
    notFoundTitle: string;
    notFoundText: string;
    backToList: string;
  };
  favorites: {
    title: string;
    intro: string;
    emptyText: string;
    goToRecipes: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  notFound: {
    title: string;
    text: string;
    goToRecipes: string;
  };
}

/** Dizionario italiano (lingua di riferimento). */
export const it: Dictionary = {
  shell: {
    brand: 'Il Ricettario',
    navAriaLabel: 'Navigazione principale',
    navRecipes: 'Ricette',
    navFavorites: 'Preferiti',
    navAbout: 'Chi siamo',
    copyright: 'Il Ricettario. Tutti i diritti riservati.',
    tagline: 'Ricette della tradizione italiana, spiegate passo dopo passo.',
  },
  labels: {
    categories: {
      antipasti: 'Antipasti',
      primi: 'Primi piatti',
      secondi: 'Secondi piatti',
      dolci: 'Dolci',
    },
    difficulties: {
      facile: 'Facile',
      media: 'Media',
      difficile: 'Difficile',
    },
  },
  shared: {
    minutes: 'min',
    servings: 'porzioni',
    time: 'Tempo',
    servingsLabel: 'Porzioni',
    difficulty: 'Difficoltà',
    publishedOn: 'Pubblicata il',
    quantitiesFor: 'Quantità per',
    people: 'persone',
    addFavorite: 'Aggiungi ai preferiti',
    removeFavorite: 'Rimuovi dai preferiti',
  },
  recipeList: {
    title: 'Tutte le ricette',
    intro: 'Cerca tra le ricette della tradizione italiana e salva le tue preferite.',
    searchPlaceholder: 'Cerca una ricetta o un ingrediente...',
    searchAria: 'Cerca una ricetta',
    categoryAria: 'Filtra per categoria',
    allCategories: 'Tutte le categorie',
    difficultyAria: 'Filtra per difficoltà',
    allDifficulties: 'Ogni difficoltà',
    resetFilters: 'Azzera filtri',
    resultOne: '1 ricetta trovata',
    resultMany: '{count} ricette trovate',
    emptyText: 'Nessuna ricetta corrisponde ai filtri selezionati.',
    showAll: 'Mostra tutte le ricette',
  },
  recipeDetail: {
    back: '← Torna alle ricette',
    ingredients: 'Ingredienti',
    steps: 'Preparazione',
    notFoundTitle: 'Ricetta non trovata',
    notFoundText: 'La ricetta che cerchi non esiste o è stata rimossa.',
    backToList: "Torna all'elenco",
  },
  favorites: {
    title: 'Le tue ricette preferite',
    intro: 'Qui trovi le ricette che hai salvato. I preferiti restano memorizzati nel tuo browser.',
    emptyText: 'Non hai ancora salvato nessuna ricetta. Esplora il catalogo e tocca il cuore per aggiungerla.',
    goToRecipes: 'Vai alle ricette',
  },
  about: {
    title: 'Chi siamo',
    p1: 'Il Ricettario è un piccolo catalogo di ricette della tradizione italiana, pensato per chi vuole cucinare piatti semplici e genuini senza perdersi in istruzioni complicate.',
    p2: 'Ogni ricetta indica il tempo di preparazione, il numero di porzioni e il livello di difficoltà, così puoi scegliere il piatto giusto per la tua giornata. Puoi cercare per nome o per ingrediente e salvare le ricette che ti piacciono tra i preferiti.',
    p3: 'Questo sito è un progetto didattico: i contenuti sono di esempio e non è collegato a nessun servizio reale. Per segnalazioni o suggerimenti scrivi a info@ilricettario.example.',
  },
  notFound: {
    title: 'Pagina non trovata',
    text: "L'indirizzo che hai aperto non esiste. Torna al catalogo per continuare a sfogliare le ricette.",
    goToRecipes: 'Vai alle ricette',
  },
};

/** Dizionario inglese: deve avere esattamente le stesse chiavi di `it`. */
export const en: Dictionary = {
  shell: {
    brand: 'The Recipe Book',
    navAriaLabel: 'Main navigation',
    navRecipes: 'Recipes',
    navFavorites: 'Favorites',
    navAbout: 'About us',
    copyright: 'The Recipe Book. All rights reserved.',
    tagline: 'Recipes of the Italian tradition, explained step by step.',
  },
  labels: {
    categories: {
      antipasti: 'Appetizers',
      primi: 'First courses',
      secondi: 'Main courses',
      dolci: 'Desserts',
    },
    difficulties: {
      facile: 'Easy',
      media: 'Medium',
      difficile: 'Hard',
    },
  },
  shared: {
    minutes: 'min',
    servings: 'servings',
    time: 'Time',
    servingsLabel: 'Servings',
    difficulty: 'Difficulty',
    publishedOn: 'Published on',
    quantitiesFor: 'Quantities for',
    people: 'people',
    addFavorite: 'Add to favorites',
    removeFavorite: 'Remove from favorites',
  },
  recipeList: {
    title: 'All recipes',
    intro: 'Search among the recipes of the Italian tradition and save your favorites.',
    searchPlaceholder: 'Search a recipe or an ingredient...',
    searchAria: 'Search a recipe',
    categoryAria: 'Filter by category',
    allCategories: 'All categories',
    difficultyAria: 'Filter by difficulty',
    allDifficulties: 'Any difficulty',
    resetFilters: 'Reset filters',
    resultOne: '1 recipe found',
    resultMany: '{count} recipes found',
    emptyText: 'No recipe matches the selected filters.',
    showAll: 'Show all recipes',
  },
  recipeDetail: {
    back: '← Back to recipes',
    ingredients: 'Ingredients',
    steps: 'Preparation',
    notFoundTitle: 'Recipe not found',
    notFoundText: 'The recipe you are looking for does not exist or has been removed.',
    backToList: 'Back to the list',
  },
  favorites: {
    title: 'Your favorite recipes',
    intro: 'Here you find the recipes you saved. Favorites are stored in your browser.',
    emptyText: 'You have not saved any recipe yet. Browse the catalog and tap the heart to add one.',
    goToRecipes: 'Go to recipes',
  },
  about: {
    title: 'About us',
    p1: 'The Recipe Book is a small catalog of traditional Italian recipes, designed for those who want to cook simple, wholesome dishes without getting lost in complicated instructions.',
    p2: 'Every recipe shows the preparation time, the number of servings and the difficulty level, so you can pick the right dish for your day. You can search by name or ingredient and save the recipes you like among your favorites.',
    p3: 'This website is an educational project: the content is sample data and it is not connected to any real service. For feedback or suggestions write to info@ilricettario.example.',
  },
  notFound: {
    title: 'Page not found',
    text: 'The address you opened does not exist. Go back to the catalog to keep browsing the recipes.',
    goToRecipes: 'Go to recipes',
  },
};

export const translations: Record<Language, Dictionary> = { it, en };
