import { Injectable } from '@angular/core';
import { StockRepository } from './stock-repository';
import { IceCreamItem } from '../data/ice-cream-item';

@Injectable({
  providedIn: 'root',
})
export class StockRepositoryServiceService extends StockRepository {
  public override items: IceCreamItem[] = [
    {
      id: 'chocolate',
      name: 'Chocolate',
      image: 'assets/chocolate.jpg',
      stock: 300,
      unit: 'ml',
      price: 0,
      quantity: 0,
    },
    {
      id: 'vanilla',
      name: 'Vanilla',
      image: 'assets/vanilla.jpg',
      stock: 100,
      unit: 'ml',
      price: 0,
      quantity: 0,
    },
    {
      id: 'pistachio',
      name: 'Pistachio',
      image: 'assets/pistachio.jpg',
      stock: 0,
      unit: 'ml',
      price: 0,
      quantity: 0,
    },

    {
      id: 'cone',
      name: 'Cone',
      stock: 2,
      unit: 'pièce',
      price: 1.0,
      quantity: 0,
    },
    {
      id: 'cup',
      name: 'Cup',
      stock: 7,
      unit: 'pièce',
      price: 0.0,
      quantity: 0,
    },

    {
      id: 'whipped_cream',
      name: 'Whipped cream',
      stock: 150,
      unit: 'ml',
      price: 0.95,
      quantity: 0,
    },
    {
      id: 'hazelnuts',
      name: 'Hazelnuts',
      stock: 100,
      unit: 'g',
      price: 1.3,
      quantity: 0,
    },
  ];
  public override decreaseStock(id: string, amount: number): void {
    const item = this.items.find((i) => i.id === id);
    if (item) {
      item.stock -= amount;
      if (item.stock < 0) item.stock = 0; // Sécurité stock négatif
    }
  }
}
