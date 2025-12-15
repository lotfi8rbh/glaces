import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonFooter,
  IonList,
  IonCheckbox,
  IonNote,
} from '@ionic/angular/standalone';
import { StockRepository } from '../../repository/stock-repository';
import { IceCreamItem } from '../../data/ice-cream-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonImg,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonList,
    IonCheckbox,
    IonNote,
    CommonModule,
    FormsModule,
  ],
})
export class OrderPage implements OnInit {
  item: IceCreamItem | undefined;
  allItems: IceCreamItem[] = []; // Liste pour l'affichage du stock
  signature: string = 'Thanks, MB';
  showDetails: boolean = false; // Pour basculer l'affichage

  constructor(
    private route: ActivatedRoute,
    private stockRepo: StockRepository
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // On récupère tous les items du repo
    this.allItems = this.stockRepo.items;

    if (id) {
      this.item = this.allItems.find((i) => i.id === id);
      // On utilise 'quantity' ici pour dire "est sélectionné pour la commande" dans cette page
      this.resetSelection();
    }
  }

  // Réinitialise les sélections : seul l'item courant est coché
  resetSelection() {
    this.allItems.forEach((i) => (i.quantity = 0));
    if (this.item) this.item.quantity = 1;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  // Gère les cases à cocher de la liste
  onSelectChange(item: IceCreamItem, event: any) {
    item.quantity = event.detail.checked ? 1 : 0;
  }

  sendOrder() {
    // On filtre les items qui sont cochés (quantity > 0)
    const itemsToOrder = this.allItems.filter((i) => i.quantity > 0);

    if (itemsToOrder.length === 0) return;

    const subject = 'Order';

    // Construction de la liste pour le mail
    let orderList = '';
    itemsToOrder.forEach((i) => {
      orderList += `* ${i.name}\n`;
    });

    const body = `Hi,\n\nPlease order the following:\n${orderList}\n${this.signature}`;

    window.location.href = `mailto:order@icecream.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
}
