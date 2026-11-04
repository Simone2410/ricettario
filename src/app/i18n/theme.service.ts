import { Injectable, effect, signal } from '@angular/core';

export type Theme = 'light' | 'dark' | 'auto';

const STORAGE_KEY = 'ricettario-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<Theme>(this.readInitialTheme());

  /** Tema corrente: 'auto' segue prefers-color-scheme. */
  readonly theme = this.themeSignal.asReadonly();

  constructor() {
    effect(() => {
      const theme = this.themeSignal();
      localStorage.setItem(STORAGE_KEY, theme);
      const root = document.documentElement;
      root.classList.toggle('dark', theme === 'dark');
      root.classList.toggle('light', theme === 'light');
    });
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
  }

  /** Cicla auto → light → dark → auto. */
  cycleTheme(): void {
    const order: Theme[] = ['auto', 'light', 'dark'];
    const index = order.indexOf(this.themeSignal());
    this.themeSignal.set(order[(index + 1) % order.length]);
  }

  private readInitialTheme(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' || stored === 'auto' ? stored : 'auto';
  }
}
