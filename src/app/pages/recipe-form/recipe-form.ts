import { Component, ElementRef, effect, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Category, Difficulty, Recipe } from '../../models/recipe';
import { I18nService } from '../../i18n/i18n.service';
import { RecipeService } from '../../services/recipe.service';

const DRAFT_KEY = 'ricettario.recipe-draft';

@Component({
  selector: 'app-recipe-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.scss',
})
export class RecipeForm {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly recipeService = inject(RecipeService);
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly i18n = inject(I18nService);

  protected readonly submitted = signal(false);

  protected readonly categories = Object.entries(this.i18n.t().labels.categories).map(([value, label]) => ({
    value: value as Category,
    label,
  }));

  protected readonly difficulties = Object.entries(this.i18n.t().labels.difficulties).map(([value, label]) => ({
    value: value as Difficulty,
    label,
  }));

  protected readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    description: ['', [Validators.required, Validators.maxLength(200)]],
    category: this.fb.nonNullable.control<Category | ''>('', Validators.required),
    difficulty: this.fb.nonNullable.control<Difficulty | ''>('', Validators.required),
    minutes: [15, [Validators.required, Validators.min(1), Validators.max(600)]],
    servings: [4, [Validators.required, Validators.min(1), Validators.max(20)]],
    emoji: ['🍽️'],
    color: ['#f7d6cf'],
    publishedAt: [this.today(), Validators.required],
    ingredients: this.fb.array([this.createIngredientGroup()]),
    steps: this.fb.array([this.createStepControl()]),
  });

  constructor() {
    // Ripristina la bozza salvata, se presente.
    const draft = this.loadDraft();
    if (draft) {
      this.form.patchValue(draft);
    }

    // Salva la bozza a ogni modifica (anti-perdita al refresh).
    this.form.valueChanges.subscribe(() => {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(this.form.getRawValue()));
      } catch {
        // localStorage non disponibile: la bozza resta solo in memoria.
      }
    });
  }

  protected get ingredients(): FormArray {
    return this.form.controls.ingredients;
  }

  protected get steps(): FormArray {
    return this.form.controls.steps;
  }

  protected addIngredient(): void {
    this.ingredients.push(this.createIngredientGroup());
  }

  protected removeIngredient(index: number): void {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index);
    }
  }

  protected addStep(): void {
    this.steps.push(this.createStepControl());
  }

  protected removeStep(index: number): void {
    if (this.steps.length > 1) {
      this.steps.removeAt(index);
    }
  }

  protected hasError(name: string): boolean {
    const control = this.form.get(name);
    return !!control && control.invalid && (control.touched || this.submitted());
  }

  protected ingredientError(index: number, field: 'name' | 'quantity'): boolean {
    const control = this.ingredients.at(index).get(field);
    return !!control && control.invalid && (control.touched || this.submitted());
  }

  protected stepError(index: number): boolean {
    const control = this.steps.at(index);
    return control.invalid && (control.touched || this.submitted());
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.focusFirstInvalid();
      return;
    }

    const value = this.form.getRawValue();
    const lang = this.i18n.language();
    // I testi inseriti dall'utente vengono salvati nella lingua corrente;
    // l'altra lingua mostra lo stesso testo come fallback.
    const localized = (text: string) => ({ it: text, en: text, [lang]: text.trim() });
    const recipe: Omit<Recipe, 'id'> = {
      title: localized(value.title),
      description: localized(value.description),
      category: value.category as Category,
      difficulty: value.difficulty as Difficulty,
      minutes: value.minutes,
      servings: value.servings,
      emoji: value.emoji.trim() || '🍽️',
      color: value.color,
      publishedAt: value.publishedAt,
      ingredients: value.ingredients.map((ingredient) => ({
        name: localized((ingredient['name'] as string).trim()),
        quantity: localized((ingredient['quantity'] as string).trim()),
      })),
      steps: value.steps.map((step) => localized((step as string).trim())),
    };

    const id = this.recipeService.addRecipe(recipe);
    this.clearDraft();
    this.router.navigate(['/ricette', id]);
  }

  /** Sposta il focus sul primo campo invalido per l'accessibilità da tastiera/screen reader. */
  private focusFirstInvalid(): void {
    const invalid = this.host.nativeElement.querySelectorAll('[aria-invalid="true"]') as NodeListOf<HTMLElement>;
    invalid[0]?.focus();
  }

  private createIngredientGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  private createStepControl() {
    return this.fb.control('', [Validators.required, Validators.minLength(5)]);
  }

  private today(): string {
    return new Date().toISOString().slice(0, 10);
  }

  private loadDraft(): unknown {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private clearDraft(): void {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // localStorage non disponibile: nessuna bozza da cancellare.
    }
  }
}
