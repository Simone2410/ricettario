import { Language } from './i18n.service';

export interface Dictionary {
  shell: {
    brand: string;
    navAriaLabel: string;
    navRecipes: string;
    navFavorites: string;
    navAbout: string;
    navAddRecipe: string;
    skipToContent: string;
    copyright: string;
    tagline: string;
    themeGroupAria: string;
    themeAuto: string;
    themeLight: string;
    themeDark: string;
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
    sortLabel: string;
    sortMinutes: string;
    sortDifficulty: string;
    sortPublished: string;
    sortAsc: string;
    sortDesc: string;
  };
  recipeForm: {
    title: string;
    titleLabel: string;
    titlePlaceholder: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    difficultyLabel: string;
    minutesLabel: string;
    servingsLabel: string;
    emojiLabel: string;
    emojiPlaceholder: string;
    colorLabel: string;
    dateLabel: string;
    ingredientsTitle: string;
    ingredientNamePlaceholder: string;
    ingredientQuantityPlaceholder: string;
    addIngredient: string;
    stepsTitle: string;
    stepPlaceholder: string;
    addStep: string;
    remove: string;
    submit: string;
    cancel: string;
    required: string;
    tooShort: string;
    tooLong: string;
    invalidNumber: string;
    minOne: string;
    atLeastOneIngredient: string;
    atLeastOneStep: string;
    intro: string;
    ingredientNameAria: string;
    ingredientQuantityAria: string;
    stepAria: string;
    removeIngredientAria: string;
    removeStepAria: string;
  };
  pages: {
    recipes: string;
    recipeDetail: string;
    newRecipe: string;
    favorites: string;
    about: string;
    notFound: string;
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
    navAddRecipe: '+ Nuova',
    skipToContent: 'Vai al contenuto',
    copyright: 'Il Ricettario. Tutti i diritti riservati.',
    tagline: 'Ricette della tradizione italiana, spiegate passo dopo passo.',
    themeGroupAria: 'Scelta del tema',
    themeAuto: 'Tema automatico: segue le impostazioni di sistema',
    themeLight: 'Tema chiaro',
    themeDark: 'Tema scuro',
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
    sortLabel: 'Ordina per',
    sortMinutes: 'Tempo',
    sortDifficulty: 'Difficoltà',
    sortPublished: 'Data di pubblicazione',
    sortAsc: 'Ordine crescente',
    sortDesc: 'Ordine decrescente',
  },
  recipeForm: {
    title: 'Aggiungi una nuova ricetta',
    titleLabel: 'Titolo',
    titlePlaceholder: 'Es. Pasta alla Norma',
    descriptionLabel: 'Descrizione',
    descriptionPlaceholder: 'Una frase che descrive la ricetta...',
    categoryLabel: 'Categoria',
    categoryPlaceholder: 'Scegli una categoria',
    difficultyLabel: 'Difficoltà',
    minutesLabel: 'Tempo di preparazione (minuti)',
    servingsLabel: 'Porzioni',
    emojiLabel: 'Emoji',
    emojiPlaceholder: '🍽️',
    colorLabel: 'Colore',
    dateLabel: 'Data di pubblicazione',
    ingredientsTitle: 'Ingredienti',
    ingredientNamePlaceholder: 'Es. Pomodori',
    ingredientQuantityPlaceholder: 'Es. 400 g',
    addIngredient: '+ Aggiungi ingrediente',
    stepsTitle: 'Preparazione',
    stepPlaceholder: 'Descrivi un passo della preparazione...',
    addStep: '+ Aggiungi passo',
    remove: 'Rimuovi',
    submit: 'Salva ricetta',
    cancel: 'Annulla',
    required: 'Campo obbligatorio',
    tooShort: 'Troppo corto',
    tooLong: 'Troppo lungo',
    invalidNumber: 'Inserisci un numero valido',
    minOne: 'Il valore minimo è 1',
    atLeastOneIngredient: 'Aggiungi almeno un ingrediente',
    atLeastOneStep: 'Aggiungi almeno un passo',
    intro: 'Compila i campi qui sotto: la ricetta verrà salvata nel tuo browser e comparirà nel catalogo.',
    ingredientNameAria: 'Nome ingrediente',
    ingredientQuantityAria: 'Quantità ingrediente',
    stepAria: 'Passo della preparazione',
    removeIngredientAria: 'Rimuovi ingrediente',
    removeStepAria: 'Rimuovi passo',
  },
  pages: {
    recipes: 'Ricette | Il Ricettario',
    recipeDetail: 'Dettaglio ricetta | Il Ricettario',
    newRecipe: 'Nuova ricetta | Il Ricettario',
    favorites: 'Preferiti | Il Ricettario',
    about: 'Chi siamo | Il Ricettario',
    notFound: 'Pagina non trovata | Il Ricettario',
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
    navAddRecipe: '+ New',
    skipToContent: 'Skip to content',
    copyright: 'The Recipe Book. All rights reserved.',
    tagline: 'Recipes of the Italian tradition, explained step by step.',
    themeGroupAria: 'Theme selection',
    themeAuto: 'Automatic theme: follows system settings',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
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
    sortLabel: 'Sort by',
    sortMinutes: 'Time',
    sortDifficulty: 'Difficulty',
    sortPublished: 'Publication date',
    sortAsc: 'Ascending order',
    sortDesc: 'Descending order',
  },
  recipeForm: {
    title: 'Add a new recipe',
    titleLabel: 'Title',
    titlePlaceholder: 'E.g. Pasta alla Norma',
    descriptionLabel: 'Description',
    descriptionPlaceholder: 'A sentence describing the recipe...',
    categoryLabel: 'Category',
    categoryPlaceholder: 'Choose a category',
    difficultyLabel: 'Difficulty',
    minutesLabel: 'Preparation time (minutes)',
    servingsLabel: 'Servings',
    emojiLabel: 'Emoji',
    emojiPlaceholder: '🍽️',
    colorLabel: 'Color',
    dateLabel: 'Publication date',
    ingredientsTitle: 'Ingredients',
    ingredientNamePlaceholder: 'E.g. Tomatoes',
    ingredientQuantityPlaceholder: 'E.g. 400 g',
    addIngredient: '+ Add ingredient',
    stepsTitle: 'Preparation',
    stepPlaceholder: 'Describe a preparation step...',
    addStep: '+ Add step',
    remove: 'Remove',
    submit: 'Save recipe',
    cancel: 'Cancel',
    required: 'This field is required',
    tooShort: 'Too short',
    tooLong: 'Too long',
    invalidNumber: 'Enter a valid number',
    minOne: 'The minimum value is 1',
    atLeastOneIngredient: 'Add at least one ingredient',
    atLeastOneStep: 'Add at least one step',
    intro: 'Fill in the fields below: the recipe will be saved in your browser and appear in the catalog.',
    ingredientNameAria: 'Ingredient name',
    ingredientQuantityAria: 'Ingredient quantity',
    stepAria: 'Preparation step',
    removeIngredientAria: 'Remove ingredient',
    removeStepAria: 'Remove step',
  },
  pages: {
    recipes: 'Recipes | The Recipe Book',
    recipeDetail: 'Recipe detail | The Recipe Book',
    newRecipe: 'New recipe | The Recipe Book',
    favorites: 'Favorites | The Recipe Book',
    about: 'About us | The Recipe Book',
    notFound: 'Page not found | The Recipe Book',
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
