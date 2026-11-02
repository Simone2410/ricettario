import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Favorites } from './pages/favorites/favorites';
import { NotFound } from './pages/not-found/not-found';
import { RecipeDetail } from './pages/recipe-detail/recipe-detail';
import { RecipeList } from './pages/recipe-list/recipe-list';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ricette' },
  { path: 'ricette', component: RecipeList, title: 'Ricette | Il Ricettario' },
  { path: 'ricette/:id', component: RecipeDetail, title: 'Dettaglio ricetta | Il Ricettario' },
  { path: 'preferiti', component: Favorites, title: 'Preferiti | Il Ricettario' },
  { path: 'chi-siamo', component: About, title: 'Chi siamo | Il Ricettario' },
  { path: '**', component: NotFound, title: 'Pagina non trovata | Il Ricettario' },
];
