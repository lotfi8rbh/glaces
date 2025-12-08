import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonButton,
  IonImg,
  IonIcon,
} from '@ionic/angular/standalone';
import { StockRepository } from '../../repository/stock-repository';
import { IceCreamItem } from '../../data/ice-cream-item';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.page.html',
  styleUrls: ['./ice-cream.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonButton,
    IonImg,
    CommonModule,
    FormsModule,
  ],
})
export class IceCreamPage implements OnInit {
  items: IceCreamItem[] = [];

  constructor(private stockRepo: StockRepository) {}

  ngOnInit() {
    this.items = this.stockRepo.items;
  }

  get flavors(): IceCreamItem[] {
    return this.items.filter((item) =>
      ['chocolate', 'vanilla', 'pistachio'].includes(item.id)
    );
  }

  onAdd(item: IceCreamItem) {
    // On implémentera la limite de 5 boules plus tard
    item.quantity++;
  }

  onSub(item: IceCreamItem) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }
}
