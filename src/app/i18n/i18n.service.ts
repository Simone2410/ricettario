import { Injectable, computed, effect, signal } from '@angular/core';

import { translations, Dictionary } from './dictionaries';

export type Language = 'it' | 'en';

export const LANGUAGES: { value: Language; label: string }[] = [
  { value: 'it', label: 'IT' },
  { value: 'en', label: 'EN' },
];

const STORAGE_KEY = 'ricettario-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly languageSignal = signal<Language>(this.readInitialLanguage());

  /** Lingua corrente, reattiva. */
  readonly language = this.languageSignal.asReadonly();

  /** Dizionario della lingua corrente. */
  readonly t = computed(() => translations[this.languageSignal()]);

  constructor() {
    effect(() => {
      const lang = this.languageSignal();
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    });
  }

  setLanguage(language: Language): void {
    this.languageSignal.set(language);
  }

  private readInitialLanguage(): Language {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'it' || stored === 'en') {
      return stored;
    }
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'it';
  }
}
