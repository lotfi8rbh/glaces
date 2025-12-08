import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ice-cream',
    pathMatch: 'full',
  },
  {
    path: 'ice-cream',
    loadComponent: () =>
      import('./views/ice-cream/ice-cream.page').then((m) => m.IceCreamPage),
  },
];
