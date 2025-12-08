import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
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
    IonInput,
    IonButton,
    CommonModule,
    FormsModule,
  ],
})
export class OrderPage implements OnInit {
  item: IceCreamItem | undefined;
  signature: string = 'Thanks Mate!';

  constructor(
    private route: ActivatedRoute,
    private stockRepo: StockRepository
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item = this.stockRepo.items.find((i) => i.id === id);
    }
  }

  sendOrder() {
    if (!this.item) return;

    const subject = 'Order';
    const body = `Hi,\n\nPlease order the following:\n* ${this.item.name} icecream\n\n${this.signature}`;

    window.location.href = `mailto:order@icecream.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  checkAllItems() {
    console.log('Go to stock details');
  }
}
