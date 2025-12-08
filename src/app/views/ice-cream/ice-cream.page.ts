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
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
  IonFooter,
  IonList,
  IonItem,
  IonNote,
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
    IonIcon,
    IonRadioGroup,
    IonRadio,
    IonCheckbox,
    IonFooter,
    IonList,
    IonItem,
    CommonModule,
    FormsModule,
    IonNote,
  ],
})
export class IceCreamPage implements OnInit {
  items: IceCreamItem[] = [];
  selectedContainerId: string = 'cup'; // Par défaut

  constructor(private stockRepo: StockRepository) {}

  ngOnInit() {
    this.items = this.stockRepo.items;
    // Initialiser le contenant par défaut dans le stock
    this.updateContainerStock('cup');
  }

  // --- Getters pour filtrer les items ---
  get flavors(): IceCreamItem[] {
    return this.items.filter((i) =>
      ['chocolate', 'vanilla', 'pistachio'].includes(i.id)
    );
  }

  get containers(): IceCreamItem[] {
    return this.items.filter((i) => ['cone', 'cup'].includes(i.id));
  }

  get extras(): IceCreamItem[] {
    return this.items.filter((i) =>
      ['whipped_cream', 'hazelnuts'].includes(i.id)
    );
  }

  // --- Logique Boules de Glace ---
  get totalScoops(): number {
    return this.flavors.reduce((acc, item) => acc + item.quantity, 0);
  }

  onAdd(item: IceCreamItem) {
    if (this.totalScoops < 5) {
      item.quantity++;
    }
  }

  onSub(item: IceCreamItem) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  // --- Logique Contenant (Radio) ---
  onContainerChange(event: any) {
    this.selectedContainerId = event.detail.value;
    this.updateContainerStock(this.selectedContainerId);
  }

  private updateContainerStock(selectedId: string) {
    this.containers.forEach((c) => (c.quantity = c.id === selectedId ? 1 : 0));
  }

  // --- Logique Extras (Checkbox) ---
  onExtraChange(item: IceCreamItem, event: any) {
    item.quantity = event.detail.checked ? 1 : 0;
  }

  // --- Calcul du Prix Total ---
  get totalPrice(): number {
    let price = 0;

    // Prix des boules (règles spécifiques)
    const scoops = this.totalScoops;
    if (scoops === 1) price += 1.5;
    else if (scoops === 2) price += 3.0;
    else if (scoops === 3) price += 4.0;
    else if (scoops === 4) price += 5.0;
    else if (scoops === 5) price += 5.5;

    // Prix du contenant (Cone = 1€, Cup = 0€)
    const cone = this.items.find((i) => i.id === 'cone');
    if (cone && cone.quantity > 0) price += cone.price;

    // Prix des extras
    this.extras.forEach((e) => {
      if (e.quantity > 0) price += e.price;
    });

    return price;
  }

  makeIceCream() {
    console.log('Creation de la glace...', this.items);
  }
}
