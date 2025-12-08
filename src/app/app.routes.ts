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
  {
    path: 'order/:id',
    loadComponent: () =>
      import('./views/order/order.page').then((m) => m.OrderPage),
  },
];
