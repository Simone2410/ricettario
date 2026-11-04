import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { I18nService, LANGUAGES } from './i18n/i18n.service';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly recipeService = inject(RecipeService);
  protected readonly i18n = inject(I18nService);
  protected readonly languages = LANGUAGES;
  protected readonly year = new Date().getFullYear();
}
