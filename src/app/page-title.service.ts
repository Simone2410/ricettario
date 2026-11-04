import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { I18nService } from './i18n/i18n.service';

@Injectable({ providedIn: 'root' })
export class PageTitleService {
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly i18n = inject(I18nService);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.url),
      )
      .subscribe((url) => this.setTitle(url));
  }

  private setTitle(url: string): void {
    const pages = this.i18n.t().pages;
    const pageTitle = url.startsWith('/ricette/')
      ? pages.recipeDetail
      : url.startsWith('/ricette')
        ? pages.recipes
        : url.startsWith('/nuova-ricetta')
          ? pages.newRecipe
          : url.startsWith('/preferiti')
            ? pages.favorites
            : url.startsWith('/chi-siamo')
              ? pages.about
              : pages.notFound;
    this.title.setTitle(pageTitle);
  }
}
